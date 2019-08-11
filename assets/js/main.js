import analyze from 'rgbaster'

document.addEventListener('DOMContentLoaded', async () => {
  let menu = document.querySelector('.menu')
  let menuCategories = document.querySelector('.menu__title')

  const img = document.querySelector('.article__picture')

  if (img) {
    const result = await analyze(img.getAttribute('src'))
    const rgb = result[0].color.substring(4, result[0].color.length - 1)
      .replace(/ /g, '')
      .split(',')

    let hsl = rgb2hsl(rgb)

    const hslValue = `hsl(${Math.round(hsl[0])}, ${Math.round(hsl[1])}%, ${Math.round(hsl[2])}%)`
    document.documentElement.style.setProperty('--color-primary', hslValue)
  }

  menuCategories.addEventListener('click', () => {
    menu.classList.toggle('open')
  })
})

function rgb2hsl (rgbArr) {
  var r1 = rgbArr[0] / 255
  var g1 = rgbArr[1] / 255
  var b1 = rgbArr[2] / 255

  var maxColor = Math.max(r1, g1, b1)
  var minColor = Math.min(r1, g1, b1)
  // Calculate L:
  var L = (maxColor + minColor) / 2
  var S = 0
  var H = 0
  if (maxColor != minColor) {
    // Calculate S:
    if (L < 0.5) {
      S = (maxColor - minColor) / (maxColor + minColor)
    } else {
      S = (maxColor - minColor) / (2.0 - maxColor - minColor)
    }
    // Calculate H:
    if (r1 == maxColor) {
      H = (g1 - b1) / (maxColor - minColor)
    } else if (g1 == maxColor) {
      H = 2.0 + (b1 - r1) / (maxColor - minColor)
    } else {
      H = 4.0 + (r1 - g1) / (maxColor - minColor)
    }
  }

  L = 62
  S = S * 100
  H = H * 60
  if (H < 0) {
    H += 360
  }
  var result = [H, S, L]
  return result
}
