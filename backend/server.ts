import * as express from 'express';
import * as cors from 'cors';
import connectToDB from './utils/database';
import todosRouter from './routes/todos'

const app = express();

// Database
connectToDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/todos', todosRouter);

const port = 5000;
app.listen(port, () => console.log('Mendengarkan ke port', port));
