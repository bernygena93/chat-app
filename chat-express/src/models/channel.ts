import { DataTypes, Model } from "sequelize";
import { IChannel } from "./type.d";
import sequelize from "../db/database";

class ChannelModel extends Model<IChannel> {}
ChannelModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "channels" },
);

export default ChannelModel;
