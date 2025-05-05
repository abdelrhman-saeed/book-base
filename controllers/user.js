
import User from "../models/User.js";

export const all = async (req, res) => {
  try {
    res.json(await User.find().populate())
  }
  catch (err) {
    res.json(500).json({ error: err.message })
  }
}

export const getById = async (req, res) => {

  try {
    const user = await User.findById(req.params.id)

    if (!user)
      return res.status(404).json({ error: 'User not found!' })

    return res.json(user)
  }

  catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const store = async (req, res) => {

  try {

    const { name, email, password } = req.body

    let user = new User({ name, email, password })

    user = await user.save()
    res.status(201).json(user)
  }
  catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const update = async (req, res) => {

  try {

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    )

    if (!user)
      return res.status(404).json({ error: 'User not found!' })

    return res.json(user)
  }

  catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

export const destroy = async (req, res) => {
  try {

    if (!(await User.findByIdAndDelete(req.params.id)))
      return res.status(404).json({ error: 'User not found!' })

    res.status(410).json({ mesage: 'User deleted successfully' })
  }

  catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

