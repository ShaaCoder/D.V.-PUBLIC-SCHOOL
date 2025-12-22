// app/api/download-prospectus/route.ts (Updated with your exact PDF path)
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Exact path to your PDF: /public/pdf/DV. Public School Prospectus.pdf
    const filePath = path.join(process.cwd(), 'public', 'pdf', 'prospectus.pdf');
    
    // Check if file exists (add console.log for debugging)
    if (!fs.existsSync(filePath)) {
      console.error('PDF file not found at:', filePath); // Check server logs
      return new NextResponse('PDF not found at ' + filePath, { status: 404 });
    }

    // Read file as buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Stream with download headers (Buffer to Uint8Array for TS)
    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="DV Public School Prospectus.pdf"', // Forces download
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return new NextResponse('Server error: ' + (error as Error).message, { status: 500 });
  }
}