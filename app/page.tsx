import fs from 'fs'
import path from 'path'

function getBodyHtml() {
  const filePath = path.join(process.cwd(), 'public', 'index.html')
  const html = fs.readFileSync(filePath, 'utf8')
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)

  if (!match) {
    return ''
  }

  return match[1]
}

export default function Page() {
  const bodyHtml = getBodyHtml()

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
