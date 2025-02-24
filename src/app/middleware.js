// middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
  const url = req.nextUrl.pathname;

  // Appliquer la restriction uniquement aux routes sous /api/
  if (url.startsWith('/api/')) {
    const token = req.headers.get('Authorization')?.split(' ')[1]; // Récupérer le token du header Authorization

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);

      if (!user.isAdmin) {
        return NextResponse.json({ error: 'Forbidden: Admins only' }, { status: 403 });
      }
    } catch (err) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }
  }

  return NextResponse.next();
}
