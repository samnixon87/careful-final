import { Request, Response } from "express";
import { care_recipients } from "../models";

class CareRecipientController {
  async findAll(_req: Request, res: Response) {
    try {
      const care_recipientsList = await care_recipients.findAll();
      res.status(200).send({
        status: "success",
        results: care_recipientsList.length,
        care_recipientsList,
      });
    } catch (err: any) {
      res.status(500).send({
        status: "error",
        message:
          err.message ||
          "An error occurred when retrieving the care_recipients model",
      });
    }
  }
}

export default new CareRecipientController();
