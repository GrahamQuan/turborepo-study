import app from './app.js';
import router from './router/posts.js';

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use('/api', router);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
