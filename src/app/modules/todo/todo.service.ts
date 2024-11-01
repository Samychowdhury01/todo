import { TTodo } from './todo.interface';
import { Todo } from './todo.model';

// create todo
const createTodoIntoDB = async (payload: TTodo) => {
  const result = await Todo.create(payload);
  return result;
};

// get all the todo
const geTodosFromDB = async () => {
  const todos = await Todo.find({}).sort({
    createdAt: -1,
  });
  return todos;
};

// update the todo
const updateSingleTodoIntoDB = async (
  todoId: string,
  payload: Partial<TTodo>,
) => {
  const todo = await Todo.findById(todoId);

  if (!todo) {
    throw new Error('Todo not found');
  }

  const updatedTodo = await Todo.findByIdAndUpdate(
    todoId,
    {
      $set: payload,
    },
    {
      new: true,
    },
  );
  return updatedTodo;
};

// remove todo
const removeTodoFromDB = async (todoId: string) => {
  const result = await Todo.findByIdAndDelete(todoId);
  return result;
};

// update label
const updateLabelIntoDB = async (todoId: string, label: string) => {
  const todo = await Todo.findById(todoId);
  if (!todo) {
    throw new Error('Todo not found');
  }
  const updatedTodo = await Todo.findByIdAndUpdate(
    todoId,
    {
      $set: {
        label: label,
      },
    },
    {
      new: true,
    },
  );
  return updatedTodo;
};

export const TodoServices = {
  createTodoIntoDB,
  geTodosFromDB,
  updateSingleTodoIntoDB,
  removeTodoFromDB,
  updateLabelIntoDB,
};
