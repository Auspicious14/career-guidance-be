import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Career Guidance and Counseling API",
      version: "1.0.0",
      description:
        "API documentation for the Career Guidance and Counseling web app",
    },
    servers: [
      {
        url: "https://career-guidance-be.onrender.com",
      },
    ],
  },
  apis: ["./routes/*.ts", "./models/*.ts"],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
