import { pool } from '../db.js';

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.send(rows);
    } catch (e) {
        return res.status(500).json({
            message: 'Algo salió mal con la petición :/'
        });
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json(rows[0]);
    } catch (e) {
        return res.status(500).json({
            message: 'Algo salió mal con la petición :/'
        });
    }
}

export const createUser = async (req, res) => {
    const data = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO users set ?', [data]);
        res.send({
            message: 'User Created',
            id: rows.insertId,
            data
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Algo salió mal con la petición :/'
        });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, email } = req.body;
    try {
        const [result] = await pool.query('UPDATE users SET username = IFNULL(?, username), password = IFNULL(?, password), email = IFNULL(?, email) WHERE id = ?', [username, password, email, id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        res.json(rows[0]);
    } catch (e) {
        return res.status(500).json({
            message: 'Algo salió mal con la petición :/'
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.sendStatus(204);
    } catch (e) {
        return res.status(500).json({
            message: 'Algo salió mal con la petición :/'
        });
    }
}