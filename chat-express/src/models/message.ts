import { DataTypes, Model } from "sequelize";
import { IMessage } from "./type.d";
import sequelize from "../db/database";

class MessageModel extends Model<IMessage> {}
MessageModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { sequelize, modelName: "messages" },
);

export default MessageModel;
