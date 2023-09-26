export class Chat {

    private id: bigint;

    private name: string;

    private user: bigint;
    private enterprise: bigint;

    private created_at: Date;
    private updated_at: Date;

    public constructor(id: bigint, name: string, user: bigint, enterprise: bigint, created_at: Date, updated_at: Date) {
        this.id = id;
        this.name = name;
        this.user = user;
        this.enterprise = enterprise;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public getId(): bigint {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getUser(): bigint {
        return this.user;
    }

    public getEnterprise(): bigint {
        return this.enterprise;
    }

    public getCreatedAt(): Date {
        return this.created_at;
    }

    public getUpdatedAt(): Date {
        return this.updated_at;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setUser(user: bigint): void {
        this.user = user;
    }

    public setEnterprise(enterprise: bigint): void {
        this.enterprise = enterprise;
    }

    public setCreatedAt(created_at: Date): void {
        this.created_at = created_at;
    }

    public setUpdatedAt(updated_at: Date): void {
        this.updated_at = updated_at;
    }
}