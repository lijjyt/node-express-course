const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    try {
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new Error('Invalid token');
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded || !decoded.name) {
            throw new Error('Invalid token properties');
        }

        req.user = { name: decoded.name };
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Unauthorized' });
    }
};

module.exports = authenticationMiddleware;
