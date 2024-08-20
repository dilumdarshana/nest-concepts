import { MessageRepository } from './messages.repository';
export declare class MessageService {
    private messageRepository;
    constructor(messageRepository: MessageRepository);
    findAll(): Promise<{
        conent: string[];
    }>;
    findOne(id: string): Promise<{
        content: string;
    }>;
    create(content: string): Promise<void>;
}
