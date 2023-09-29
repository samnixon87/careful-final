import { Request, Response } from "express";
import { caregivers } from "../models";

class CaregiverController {
  async findAll(_req: Request, res: Response) {
    try {
      const caregiversList = await caregivers.findAll();
      res.status(200).send({
        status: "success",
        results: caregiversList.length,
        caregiversList,
      });
    } catch (err: any) {
      res.status(500).send({
        status: "error",
        message:
          err.message ||
          "An error occurred when retrieving the caregivers model",
      });
    }
  }
}

export default new CaregiverController();
