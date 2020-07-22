import { Request, Response, text } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(req: Request, res: Response) {
    const user = createUser({ 
        name: 'juan',
        email: 'juanrov_@hotmail.com',
        password: '123',
        tech: [
            'nodejs',
            'reactjs',
            'react native',
            { title: 'JavaScript', experience: 100}
        ]
    });

    return res.json({ message: 'Hello World'})
}