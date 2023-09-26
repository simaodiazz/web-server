import { Connection, createConnection } from "mysql2";
import express, { Express } from "express";
import { config } from "dotenv";

export abstract class App {

    private connection: Connection;
    private express: Express;

    public constructor() {
        // Load variables from .env
        config();

        this.express = express()

        // Initialize express
        this.express.listen(process.env.SERVER_PORT, () => {
            console.log(`Server started on port ${process.env.SERVER_PORT}`);
        });

        // Connect to database
        this.connection = createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: Number(process.env.MYSQL_PORT),
        })

        this.connection.connect((err) => {
            if (err) {
                throw err;
            } else {
                console.log("Connected to database");
            }
        });
    }

    getExpress(): Express {
        return this.express;
    }

    getConnection(): Connection {
        return this.connection;
    }
}
