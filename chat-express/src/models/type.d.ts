export interface IMessage {
  id: {
    type: Number;
    primaryKey: Boolean;
    autoIncrement: Boolean;
    unique: Boolean;
    allowNull: Boolean;
  };
  message: {
    type: String;
    allowNull: Boolean;
  };
  date: {
    type: Date;
    allowNull: Boolean;
  };
}

export interface IChannel {
  id: {
    type: Number;
    primaryKey: Boolean;
    autoIncrement: Boolean;
    unique: Boolean;
    allowNull: Boolean;
  };
  title: {
    type: String;
    allowNull: Boolean;
  };
  description: {
    type: String;
    allowNull: Boolean;
  };
}

export interface IUser {
  id: {
    type: Number;
    primaryKey: Boolean;
    autoIncrement: Boolean;
    unique: Boolean;
    allowNull: Boolean;
  };
  username: {
    type: String;
    allowNull: Boolean;
  };
  email: {
    type: String;
    allowNull: Boolean;
    unique: Boolean;
  };
  password: {
    type: String;
    allowNull: Boolean;
  };
}
