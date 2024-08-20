import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';

@Injectable()
export class MessageService {
  constructor(private messageRepository: MessageRepository) {}

  async findAll() {
    return this.messageRepository.findAll();
  }

  async findOne(id: string) {
    return this.messageRepository.findOne(id);
  }

  async create(content: string) {
    return this.messageRepository.create(content);
  }
}
