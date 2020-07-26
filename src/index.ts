import {Request, Response} from 'express';
import createUser from './services/CreateUsers';

export function sayHello (request: Request , response: Response) {
    const user = createUser({
        name: 'Jefferson da Silva',
        email: 'je_jss@hotmail',
        password: '5461237',
        techs: ['NodeJS', 'React',
        {title: 'JavaScript', experience: 100}]
    });
   
    return response.json(user);
}