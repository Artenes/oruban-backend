import jwt from 'jsonwebtoken';

import config from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Bearer w9ef983w2f98fwjf90fjw09fj0w9j
  // so we have to split in the space and get the 2nd item
  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, config.secret);
    // make the authenticated id available in the request
    req.employeeId = decoded.id;
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  return next();
};
