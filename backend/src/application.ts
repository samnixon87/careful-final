import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import nocache from "nocache";
import router from "./routes";
import { errorHandler } from './middleware/error.middleware'
import { notFoundHandler } from './middleware/not-found.middleware'

const createApp = () => {
  const app = express();
  app.use(router);

  // Load up some handy middleware
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((_, res, next) => {
    res.contentType("application/json; charset=utf-8");
    next();
  });
  app.use(nocache());

  // Error handling for auth
  app.use(errorHandler)
  app.use(notFoundHandler)

  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET"],
      preflightContinue: true,
      allowedHeaders: ["Authorization", "Content-type", "Origin"],
      credentials: true
    })
  );

  return app;
};

// Routes for tests

export default createApp;
