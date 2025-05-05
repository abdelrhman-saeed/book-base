
import express from 'express'
import mongoose from 'mongoose'

import authRoutes from './routes/auth.js'
import bookRoutes from './routes/books.js'
import userRoutes from './routes/users.js'
import bookReviewRoutes from './routes/bookReviews.js'

const app = express()
const port = process.env.PORT || 5000
const host = process.env.HOST || '127.0.0.1'

app.use(express.json())


app.use('/api/auth', authRoutes)

app.use('/api/books', bookRoutes)
app.use('/api/users', userRoutes)
app.use('/api/book-reviews', bookReviewRoutes)


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err))


app.get('/', (req, res) => res.send('hello world'))

app.listen(port, host, () =>
  console.log(`Server is running on ${host}:${port}`)
)
