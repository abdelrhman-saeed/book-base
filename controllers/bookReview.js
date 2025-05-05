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

