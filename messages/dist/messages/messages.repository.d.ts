export declare class MessageRepository {
    findAll(): Promise<{
        conent: string[];
    }>;
    findOne(id: string): Promise<{
        content: string;
    }>;
    create(content: string): Promise<void>;
}
