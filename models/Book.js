
import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    summary: { type: String },

    genres: [String],

    averageRating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },

    year: Number,
  },
  { timestamps: true }
)


const Book = mongoose.model('Book', bookSchema)
export default Book
