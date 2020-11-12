import { Schema, Document, model } from 'mongoose';

interface Todo extends Document {
  _id: string;
  text: string;
  required: string;
}

const TodoSchema = new Schema<Todo>({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export default model<Todo>('Todo', TodoSchema);