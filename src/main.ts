import { App } from "./app";

export class Main extends App {

    private static instance: Main;

    public static getInstance(): Main {
        if (this.instance == null) {
            this.instance = new Main();
        }
        return this.instance;
    }
}

Main.getInstance()
