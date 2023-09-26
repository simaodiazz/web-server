import { OrderStatus } from "./order.status";

export class Order {
    
    private id: bigint;

    private description: string;    

    private status: OrderStatus;

    private user: bigint;
    private enterprise: bigint;
    private chat: bigint;
    private rate: bigint;

    private created_at: Date;
    private updated_at: Date;

    public constructor(id: bigint, description: string, status: OrderStatus, user: bigint, enterprise: bigint, chat: bigint, rate: bigint, created_at: Date, updated_at: Date) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.user = user;
        this.enterprise = enterprise;
        this.chat = chat;
        this.rate = rate;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public getId(): bigint {
        return this.id;
    }

    public getDescription(): string {
        return this.description;
    }

    public getStatus(): OrderStatus {
        return this.status;
    }

    public getUser(): bigint {
        return this.user;
    }

    public getEnterprise(): bigint {
        return this.enterprise;
    }

    public getChat(): bigint {
        return this.chat;
    }

    public getRate(): bigint {
        return this.rate;
    }

    public getCreatedAt(): Date {
        return this.created_at;
    }

    public getUpdatedAt(): Date {
        return this.updated_at;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setStatus(status: OrderStatus): void {
        this.status = status;
    }

    setUser(user: bigint): void {
        this.user = user;
    }

    setEnterprise(enterprise: bigint): void {
        this.enterprise = enterprise;
    }

    setChat(chat: bigint): void {
        this.chat = chat;
    }

    setRate(rate: bigint): void {
        this.rate = rate;
    }

    setCreatedAt(created_at: Date): void {
        this.created_at = created_at;
    }

    setUpdatedAt(updated_at: Date): void {
        this.updated_at = updated_at;
    }
}
