import { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsPath = path.join(__dirname, '../data/post.json');
const postsData = JSON.parse(await fs.readFile(postsPath, 'utf-8'));
const posts = postsData;

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

  await fs.writeFile(postsPath, JSON.stringify(posts, null, 2));

  res.status(201).json(newPost);
});

export default router;
