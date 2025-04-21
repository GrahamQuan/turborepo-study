import { Router } from 'express';
import { db, posts } from '@workspace/db';

const router: Router = Router();

router.get('/posts', async (req, res) => {
  const postsList = await db.select().from(posts);
  res.json(postsList);
});

router.post('/posts', async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = await db.insert(posts).values({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

export default router;
