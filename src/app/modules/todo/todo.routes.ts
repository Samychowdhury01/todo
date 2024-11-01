import { Router } from "express";
import { TodoControllers } from "./todo.controller";

const router = Router()

router.post('/', TodoControllers.createTodo)
router.get('/', TodoControllers.getTodos)
router.put('/:todoId', TodoControllers.updateTodo)
router.put('/label/:todoId', TodoControllers.updateLabel)
router.delete('/:todoId', TodoControllers.removeTodo)

export const TodoRoutes = router