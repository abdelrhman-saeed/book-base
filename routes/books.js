
import express from 'express'
import * as Book from '../controllers/book.js'

import { authMiddleware } from '../middleware/auth.js'

const router = express.Router()


router.get('/', Book.all)
router.get('/:id', Book.getById)

router.post('/', authMiddleware, Book.store)

router.put('/:id', authMiddleware, Book.update)
router.delete('/:id', authMiddleware, Book.destroy)

export default router
