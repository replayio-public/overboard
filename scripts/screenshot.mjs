import { chromium } from 'playwright'

async function start() {
  console.log('Starting browser...')

  const browser = await chromium.launch()
  const canvasPage = await browser.newPage({ deviceScaleFactor: 2 })

  console.log('Taking hoverboard screenshot...')

  await canvasPage.goto('http://localhost:3000/?three=true')

  await canvasPage
    .locator('canvas')
    .screenshot({ path: 'public/hoverboard.png' })

  await canvasPage.close()

  console.log('Taking open graph screenshot...')

  const fullPage = await browser.newPage()

  await fullPage.goto('http://localhost:3000/')

  await fullPage.setViewportSize({ width: 1200, height: 630 })

  await fullPage.screenshot({ path: 'public/og-image.png' })

  console.log('Done 📸')

  process.exit(1)
}

start()
