import { model, Schema } from 'mongoose';
import { TTodo } from './todo.interface';

const todoSchema = new Schema<TTodo>(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    status: {
      type: String,
      enum: ['Todo', 'In-Progress', 'Done', 'Canceled'],
      required: true,
    },
    label: {
      type: String,
      enum: ['Bug', 'Feature', 'Documentation', 'Enhancement'],
      required: true,
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
    },
  },
  {
    timestamps: true,
  },
);

export const Todo = model<TTodo>('Todo', todoSchema);
