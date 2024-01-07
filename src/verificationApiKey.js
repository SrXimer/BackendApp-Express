export function verificarApiKey(req, res, next) {
    const apiKey = req.headers['api-key'];

    if (!apiKey || apiKey !== 'ed15c582-2072-46a3-8353-3df0f964') {
        return res.status(401).json({ error: 'Api key no válida.' });
    }

    next();
}

