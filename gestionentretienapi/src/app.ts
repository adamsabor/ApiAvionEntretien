//********** Imports **********//
import express from "express";
import cors from "cors";
import * as middlewares from "./middlewares";
import aeronefController from "./pages/interfaces/aeronefController";

require("dotenv").config();

//********** Server **********//
const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// Initializing express.
const app = express();

// Enable CORS
app.use(cors(options));

// Middleware to parse JSON through requests.
app.use(express.json());

// Routes
app.use("/aeronefs", aeronefController); // Montre le contrôleur d'aéronefs sur le chemin spécifié

// Middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
