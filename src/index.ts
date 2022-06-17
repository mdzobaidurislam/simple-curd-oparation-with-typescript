import express, { Request, Response, Application } from 'express';
import { json } from 'body-parser';
import mongoose,{ConnectOptions } from 'mongoose'
import { cityRouter } from './routes/cityRoute';
import { packageRouter } from './routes/packageRoute';

import connect from './connect';
const app: Application = express();
const port = 8080;

app.use(json());
app.use(cityRouter)
app.use(packageRouter)

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Mongoose & TypeScript example')
);

app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`)
);
const db = 'mongodb://localhost:27017/todo-typescript';
connect({db});


// mongodb connection
// const url = 'mongodb://localhost:27017/todo-typescript'

// // mongodb connection
// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions )
// .then(result => app.listen(8080, () => console.log(`app running on port ${8080}`)))
// .catch(err => console.log(err))
