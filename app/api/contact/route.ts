import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('contacts');

    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Success', id: result.insertedId }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
