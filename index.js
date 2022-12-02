import express from 'express';
import chalk from 'chalk';
import { getLanguages  } from './controllers/langugeController.js';
import { postExecute } from './controllers/executeController.js';
const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/languages', getLanguages );

app.post('/execute', postExecute );

app.listen(PORT, () => {
  console.log(chalk.blue(`Server is running on port ${PORT}`));
});
