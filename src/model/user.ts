export class User {

    private id: bigint;

    private name: string;
    private username: string;

    private email: string;

    private password: string;

    private created_at: Date;
    private updated_at: Date;

    public constructor(id: bigint, name: string, username: string, email: string, password: string, created_at: Date, updated_at: Date) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public getId(): bigint {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getUsername(): string {
        return this.username;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getCreatedAt(): Date {
        return this.created_at;
    }

    public getUpdatedAt(): Date {
        return this.updated_at;
    }

    setName(name: string): void {
        this.name = name;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setPassword(password: string): void {
        this.password = password;
    }
}
