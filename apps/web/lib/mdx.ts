import fs from 'node:fs/promises'
import path from 'node:path'

const CONTENT_DIR = path.join(process.cwd(), 'content/projects')

export async function getMDXSource(slug: string): Promise<string | null> {
  'use cache'
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
    return await fs.readFile(filePath, 'utf-8')
  } catch {
    return null
  }
}
