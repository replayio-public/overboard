import { chromium } from 'playwright'

async function start() {
  console.log('Starting browser...')

  const browser = await chromium.launch()
  const page = await browser.newPage({ deviceScaleFactor: 3 })

  console.log('Taking hoverboard screenshot...')

  await page.goto('http://localhost:3000/?three=true')

  await page.locator('canvas').screenshot({ path: 'public/hoverboard.png' })

  console.log('Taking open graph screenshot...')

  await page.goto('http://localhost:3000/')

  await page.setViewportSize({ width: 1200, height: 630 })

  await page.screenshot({ path: 'public/og-image.png' })

  console.log('Done 📸')

  process.exit(1)
}

start()
