import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "@app/common";
import { Message } from "../schemas/message.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Model, Connection } from "mongoose";

@Injectable()
export class MessagesRepository extends AbstractRepository<Message> {
  protected readonly logger = new Logger(MessagesRepository.name)

  constructor(
    @InjectModel(Message.name) 
    private appModel: Model<Message>, 
    @InjectConnection() connection: Connection,
  ) {
    super(appModel, connection)
  }

  async findAllMessages(id): Promise<any> {
    const findAll = await this.appModel.find({ chat_id: { $all: [id] } });
    return findAll;
  }
}