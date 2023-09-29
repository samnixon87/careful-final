import { Request, Response } from "express";
import { events } from "../models";
import sequelize from "../db";

class EventController {
  async findAll(req: Request, res: Response) {
    try {

      // Page variables
      let size = 100;
      let page = 0;

      const pageAsNumber = Number.parseInt(req.query.page as string)

      if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        page = pageAsNumber
      }

      const eventsList = await events.findAndCountAll({
        where: { care_recipient_id: req.params.id },
        order: [["timestamp", "DESC"]],
        offset: page * size,
        limit: size,
      });

      // Bundling our events by visit
      const daily_events = eventsList.rows.reduce(
        (day: any, event: any) => ({
          ...day,
          [event.visit_id]: [...(day[event.visit_id] || []), event],
        }),
        {}
      );
      //  Bundle events by date
      const visits_by_date = await events.count({
        where: { care_recipient_id: req.params.id },
        distinct: true,
        col: "visit_id",
        attributes: [
          [
            sequelize.fn("date_format", sequelize.col("timestamp"), "%Y-%m-%d"),
            "date",
          ],
        ],
        group: ["date"],
      });

      res.status(200).send({
        status: "success",
        total_events: eventsList.count,
        days_visited: Object.keys(daily_events).length,
        visits_by_date: visits_by_date,
        daily_events: daily_events
      });
    } catch (err: any) {
      res.status(500).send({
        status: "error",
        message:
          err.message ||
          "An error occurred when retrieving the events model",
      });
    }
  }
}

export default new EventController();
