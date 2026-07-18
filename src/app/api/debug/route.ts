import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

export async function GET() {
  const diagnostics: any = {
    timestamp: new Date().toISOString(),
    env: {
      NODE_ENV: process.env.NODE_ENV,
      RENDER: process.env.RENDER,
      DATABASE_URL: process.env.DATABASE_URL,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      HAS_NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
    },
    cwd: process.cwd(),
    files: {},
  };

  // Check file existence
  const filesToCheck = [
    path.join(process.cwd(), 'prisma', 'dev.db'),
    path.join(process.cwd(), 'dev.db'),
    '/tmp/dev.db'
  ];

  for (const f of filesToCheck) {
    diagnostics.files[f] = {
      exists: fs.existsSync(f),
    };
    if (fs.existsSync(f)) {
      try {
        const stats = fs.statSync(f);
        diagnostics.files[f].size = stats.size;
        diagnostics.files[f].mode = stats.mode;
        // Try opening it to test write permission
        const fd = fs.openSync(f, 'r+');
        fs.closeSync(fd);
        diagnostics.files[f].writable = true;
      } catch (err: any) {
        diagnostics.files[f].writable = false;
        diagnostics.files[f].error = err.message;
      }
    }
  }

  // Try Prisma query
  try {
    const userCount = await prisma.user.count();
    diagnostics.prisma = {
      status: "success",
      userCount,
    };
  } catch (err: any) {
    diagnostics.prisma = {
      status: "error",
      message: err.message,
      stack: err.stack,
    };
  }

  return NextResponse.json(diagnostics);
}
