
import express from 'express'
import * as User from '../controllers/user.js'

// import { authMiddleware } from '../middleware/auth.js'

const router = express.Router()


router.get('/', User.all)
router.get('/:id', User.getById)

router.post('/', User.store)

router.put('/:id', User.update)
router.delete('/:id', User.destroy)

// router.post('/', authMiddleware, User.store)

// router.put('/:id', authMiddleware, User.update)
// router.delete('/:id', authMiddleware, User.destroy)

export default router
