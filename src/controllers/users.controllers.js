import {pool} from '../db.js';

export const getUsers = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users');
    res.send(rows);
}

export const getUser = async (req, res) => {
    const {id} = req.params;
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    res.json(rows[0]);
}

export const createUser = async (req, res) => {
    const data = req.body;

    const [rows] = await pool.query('INSERT INTO users set ?', [data]);
    res.send({
        message: 'User Created',
        id: rows.insertId,
        data
    });
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;
    const updateUser = {
        name,
        email
    };
    await router.query('UPDATE users set ? WHERE id = ?', [updateUser, id]);
    res.json({
        message: 'User Updated'
    });
}

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    await router.query('DELETE FROM users WHERE id = ?', [id]);
    res.json({
        message: 'User Deleted'
    });
}