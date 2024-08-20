import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';
export declare class MessagesController {
    messageService: MessageService;
    constructor(messageService: MessageService);
    listMessages(): Promise<{
        conent: string[];
    }>;
    createMessage(body: CreateMessageDto): Promise<void>;
    getMessage(id: string): Promise<{
        content: string;
    }>;
}
