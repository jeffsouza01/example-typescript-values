import express from 'express';
import { sayHello } from '.';

const app = express();

app.get('/', sayHello );


app.listen(3333, () => console.log('Server Started!'));
