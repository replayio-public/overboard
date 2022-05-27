import { chromium } from 'playwright'

async function start() {
  console.log('Starting browser...')

  const browser = await chromium.launch()
  const page = await browser.newPage({ deviceScaleFactor: 3 })

  console.log('Taking screenshot...')

  await page.goto('http://localhost:3000/?three=true')

  await page.locator('canvas').screenshot({ path: 'public/hoverboard.png' })

  console.log('Done 📸')

  process.exit(1)
}

start()
