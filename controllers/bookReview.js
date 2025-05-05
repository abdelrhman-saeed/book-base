import mongoose from "mongoose";
import Book from "../models/Book.js";
import BookReview from "../models/BookReview.js";

export const updateBookReview = async (req, res) => {
  try {
    await BookReview.findOneAndUpdate(
      { book: req.params.id, user: req.user.userId },
      {
        $set: { rating: req.body.rating },
        $setOnInsert: {
          book: req.params.id,
          user: req.user.userId,
        },
      },
      { new: true, upsert: true }
    );

    return res.json({ message: 'Review updated' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const getBookReview = async (req, res) => {

  try {

    const stats = await BookReview.aggregate([
      { $match: { book: new mongoose.Types.ObjectId(req.params.id) } },
      {
        $group: {
          _id: null,
          avgRating: { $avg: '$rating' },
          count: { $sum: 1 }
        }
      }
    ])

    await Book.findByIdAndUpdate(req.params.id, {
      averageRating: stats[0]?.avgRating || 0,
      reviewCount: stats[0]?.count || 0,
    })

    return res.json({ rating: stats[0].avgRating })

  }
  catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
