import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "@app/common";
import { Profile } from "./schemas/profile.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Model, Connection } from "mongoose";

@Injectable()
export class AppRepository extends AbstractRepository<Profile> {
  protected readonly logger = new Logger(AppRepository.name)

  constructor(
    @InjectModel(Profile.name) appModel: Model<Profile>, 
    @InjectConnection() connection: Connection,
  ) {
    super(appModel, connection)
  }
}