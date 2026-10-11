import "dotenv/config";
import fastify from "fastify";
import { ZodError } from "zod";
import { AxiosError } from "axios";
import cors from "@fastify/cors";
import { weatherRoutes } from "./routes/weather";
import { favoriteCitiesRoutes } from "./routes/favoriteCities";

const app = fastify();

app.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
});

app.register(weatherRoutes);
app.register(favoriteCitiesRoutes);

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({ message: "Validation error.", issues: error.format() });
    }

    // Erros vindos da WeatherAPI
    if (error instanceof AxiosError && error.response) {
        const { status, data } = error.response;

        if (status === 400) {
            return reply.status(404).send({ message: "City not found." });
        }

        console.error("WeatherAPI:", status, data);

        return reply.status(502).send({ message: "Weather service unavailable." });
    }

    console.error(error);

    return reply.status(500).send({ message: "Internal server error." });
});

const port = Number(process.env.PORT) || 3333;

app.listen({ port, host: '0.0.0.0' }).then(() => {
    console.log(`HTTP server running on port ${port}`);
});
