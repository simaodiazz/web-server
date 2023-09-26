export class Enterprise {

    private id: bigint;

    private name: string;
    private description: string;

    private created_at: Date;
    private updated_at: Date;

    constructor(id: bigint, name: string, description: string, created_at: Date, updated_at: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public getId(): bigint {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCreatedAt(): Date {
        return this.created_at;
    }

    public getUpdatedAt(): Date {
        return this.updated_at;
    }
}
