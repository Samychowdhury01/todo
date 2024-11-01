import { Request, Response } from 'express';
import { TodoServices } from './todo.service';

// create todo controller
const createTodo = async (req: Request, res: Response) => {
  try {
    const todoData = req.body;
    const todo = await TodoServices.createTodoIntoDB(todoData);
    res.status(201).json(todo);
  } catch (err) {
    console.log(err);
  }
};

// get all the todos
const getTodos = async (req: Request, res: Response) => {
  try {
    const todo = await TodoServices.geTodosFromDB();
    res.status(201).json(todo);
  } catch (err) {
    console.log(err);
  }
};

// update todo
const updateTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    
    const todoData = req.body;
    console.log({todoData, todoId});
    const todo = await TodoServices.updateSingleTodoIntoDB(todoId, todoData);
    
    res.status(201).json(todo);
  } catch (err) {
    console.log(err);
  }
};

// remove todo
const removeTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    const todo = await TodoServices.removeTodoFromDB(todoId);
    res.status(201).json(todo);
  } catch (err) {
    console.log(err);
  }
};

// update label
const updateLabel = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    const { label } = req.body;
    const todo = await TodoServices.updateLabelIntoDB(todoId, label);
    res.status(201).json(todo);
  }
  catch (err) {
    console.log(err);
  }
}

export const TodoControllers = {
  createTodo,
  getTodos,
  updateTodo,
  removeTodo,
  updateLabel
};
