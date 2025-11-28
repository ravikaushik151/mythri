// app/dashboard/api/upload/route.js
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const data = await request.formData();
    const file = data.get('image');

    if (!file) {
        return NextResponse.json({ error: 'No file received' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = file.name.replace(/\s+/g, '-').toLowerCase(); // sanitize
    const filepath = join(process.cwd(), 'public', 'images', filename);

    try {
        await writeFile(filepath, buffer);
        return NextResponse.json({ url: `/images/${filename}` });
    } catch (e) {
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}