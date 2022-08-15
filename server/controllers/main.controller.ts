import { Request, Response } from 'express';
import pool from '../database/database';

export const onGetAllUsers = async (req: Request, res: Response) => {
    const users = await pool.query('SELECT * FROM users');
    res.json(users);
}
export const onCreateNewUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const newUser = {
        name,
        email,
        password
    }
    await pool.query('INSERT INTO users SET ?', [newUser]);
    res.json({ message: 'User created' });
}

export const onUpdateUserById = async (req: Request, res: Response) => {   
    const { id } = req.params;
    const { name, email, password } = req.body;
    const newUser = {
        name,
        email,
        password
    }
    await pool.query('UPDATE users SET ? WHERE id = ?', [newUser, id]);
    res.json({ message: 'User updated' });
}

export const onDeleteUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    res.json({ message: 'User deleted' });
}