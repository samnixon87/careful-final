/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
import createApp from "./application";
import dotenv from "dotenv";
import sequelize from "./db";
dotenv.config();

const port = process.env.PORT || 8000;

const app = createApp();

void (async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connection successful");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to db: ", error);
  }
})();
