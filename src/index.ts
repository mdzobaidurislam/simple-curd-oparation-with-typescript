import express, { Request, Response, Application } from 'express';
import { json } from 'body-parser';
import { cityRouter } from './routes/cityRoute';
import { packageRouter } from './routes/packageRoute';
import 'dotenv/config'
import connect from './connect';
const app: Application = express();

const PORT = process.env.PORT || 8080;

app.use(json());
app.use(cityRouter)
app.use(packageRouter)

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Simple CURD Oparation! ')
);


app.listen(PORT, () =>
  console.log(`Application started successfully on port ${PORT}.`)
);
const db = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.1wbmx.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
connect({db});

// typscript

// mongodb connection
// const url = 'mongodb://localhost:27017/todo-typescript'

// // mongodb connection
// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions )
// .then(result => app.listen(8080, () => console.log(`app running on port ${8080}`)))
// .catch(err => console.log(err))
