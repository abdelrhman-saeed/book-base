
import express from 'express'
import * as BookReview from '../controllers/bookReview.js'

import { authMiddleware } from '../middleware/auth.js'

const router = express.Router()

router.put('/:id/update', authMiddleware, BookReview.updateBookReview)

export default router
