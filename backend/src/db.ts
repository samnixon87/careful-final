import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { care_recipients, caregivers, events } from "./models";
dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  port: 3306,
  host: process.env.RDS_HOSTNAME,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  models: [care_recipients, caregivers, events],
});

export default sequelize;
