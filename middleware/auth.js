import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ error: 'Unauthorized' })

  try {
    const token = authHeader.split(' ')[1];

    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  }
  catch (err) {
    res.status(401).json({ error: 'Invalid token' })
  }
}
