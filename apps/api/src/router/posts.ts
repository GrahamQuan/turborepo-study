import { Router } from 'express';
import posts from '../data/post.json' assert { type: 'json' };
import fs from 'fs/promises';
import path from 'path';

const router: Router = Router();

router.get('/posts', (req, res) => {
  res.json(posts);
});

router.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  posts.push(newPost);

  await fs.writeFile(
    path.join(import.meta.dirname, '../data/post.json'),
    JSON.stringify(posts, null, 2)
  );

  res.status(201).json(newPost);
});

export default router;
