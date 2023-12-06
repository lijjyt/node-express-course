const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../middleware/customErrors')

const login = async (req,res) =>{
    const { name, password } = req.body

    if (!name || !password) {
        throw new BadRequestError('Please provide name and password');
    }


    const secretKey = process.env.JWT_SECRET;

    const expiresIn = '24h';

    const token = jwt.sign({ name }, secretKey, { expiresIn });


    res.status(200).json({ msg: 'logged in', token})
    console.log(token, `success`)

}

const hello = async (req, res) => {

    res.status(200).json({
      msg: `Hello, ${req.user.name}`,
    })
  }

module.exports = { login, hello }
