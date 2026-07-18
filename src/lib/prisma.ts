import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prismaClientSingleton = () => {
  // If running on Render, redirect SQLite database to /tmp to make it writable
  if (process.env.RENDER === 'true') {
    const destDbPath = '/tmp/dev.db'
    
    if (!fs.existsSync(destDbPath)) {
      const possibleSrcPaths = [
        path.join(/*turbopackIgnore: true*/ process.cwd(), 'prisma', 'dev.db'),
        path.join(/*turbopackIgnore: true*/ process.cwd(), 'dev.db')
      ]
      
      let copied = false
      for (const srcDbPath of possibleSrcPaths) {
        if (fs.existsSync(srcDbPath)) {
          try {
            fs.copyFileSync(srcDbPath, destDbPath)
            console.log(`Successfully copied database from ${srcDbPath} to ${destDbPath}`)
            copied = true
            break
          } catch (err) {
            console.error(`Failed to copy database from ${srcDbPath}:`, err)
          }
        }
      }
      
      if (!copied) {
        console.warn('No pre-seeded database file found in build output.')
      }
    }
    
    // Override the environment variable so Prisma Client uses the writable database in /tmp
    process.env.DATABASE_URL = 'file:/tmp/dev.db'
  }

  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

