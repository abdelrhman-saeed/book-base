
import Book from "../models/Book.js";

export const all = async (req, res) => {
  try {
    res.json(await Book.find().populate('author', 'name email'))
  }
  catch (err) {
    res.json(500).json({ error: err.message })
  }
}

export const getById = async (req, res) => {

  try {

    const book = await Book.findById(req.params.id).populate('author', 'name email')

    if (!book)
      return res.status(404).json({ error: 'Book not found!' })

    return res.json(book)
  }

  catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const store = async (req, res) => {

  try {

    const { title, summary, genres, year } = req.body
    const book = new Book({ title, summary, genres, year, author: req.user.userId })

    res.status(201).json(await book.save())
  }
  catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const update = async (req, res) => {

  try {

    const book = await Book.findByIdAndUpdate(
      req.params.id, { ...req.body }, { new: true, runValidators: true }
    )

    if (!book)
      return res.status(404).json({ error: 'Book not found!' })

    return res.json(book)
  }

  catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

export const destroy = async (req, res) => {

  try {

    if (!(await Book.findByIdAndDelete(req.params.id)))
      return res.status(404).json({ error: 'Book not found!' })

    res.status(410).json({ mesage: 'Book deleted successfully' })
  }

  catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

