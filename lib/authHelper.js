import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_fallback_key_replace_me';

export async function verifyAdminAuth(req) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { user: null, error: 'Unauthorized: No token provided' };
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    
    return { user: decoded, error: null };
  } catch (err) {
    return { user: null, error: 'Unauthorized: Invalid token' };
  }
}
