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

router.delete('/:id', async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
  } catch (err) {
    console.log(err);
  }
});

export default router;