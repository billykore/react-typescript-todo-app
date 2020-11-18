import { Router } from 'express';
import Todo from '../models/Todo';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const todos = await Todo.find().sort('-createdAt');
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text,
      completed: req.body.completed
    });
    await todo.save();
  } catch (err) {
    console.log(err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, { completed: true });
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
  } catch (err) {
    console.log(err);
  }
});

export default router;