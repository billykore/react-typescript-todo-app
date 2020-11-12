import * as mongoose from 'mongoose';

export default function connectToDB() {
  mongoose.connect(
    'mongodb+srv://dbUser:dbUserPassword@cluster0.6x091.mongodb.net/todoapp?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Terhubung ke database', mongoose.connection.host)
  );
}