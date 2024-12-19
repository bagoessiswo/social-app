import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "@app/common";
import { Chat } from "../schemas/chat.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Model, Connection } from "mongoose";

@Injectable()
export class ChatsRepository extends AbstractRepository<Chat> {
  protected readonly logger = new Logger(ChatsRepository.name)

  constructor(
    @InjectModel(Chat.name) 
    private appModel: Model<Chat>, 
    @InjectConnection() 
    connection: Connection,
  ) {
    super(appModel, connection)
  }


  async createChat(chat): Promise<any> {
    const createOne = await this.appModel.create(chat);
    return createOne;
  }

  async findAllChats(id): Promise<any> {
    const findAll = await this.appModel.find({ members: { $all: [id] } });
    return findAll;
  }
}