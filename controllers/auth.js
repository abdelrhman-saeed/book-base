
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET

export async function signup(req, res) {

  const { name, email, password } = req.body

  try {

    if (await User.findOne({ email }))
      return res.status(400).json({ message: 'Already registred' })

    const user = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    })

    await user.save()

    return res.status(201).json({ message: 'User Registered!' })

  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }

}

export async function signin(req, res) {

  const { email, password } = req.body

  try {

    const user = await User.findOne({ email })

    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ message: 'Invalid credentials' })

    console.log(JWT_SECRET)

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: '1h',
    })

    return res.json(token)

  } catch (err) {
    return res.status(500).json({ message: `Server error: ${err}` })
  }

}
