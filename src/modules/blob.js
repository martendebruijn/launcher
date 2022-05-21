export default {
  getHue() {
    const today = new Date()
    const currYear = today.getFullYear()
    const daysInYear =
      (currYear % 4 === 0 && currYear % 100 > 0) || currYear % 400 === 0
        ? 366
        : 365
    const december31 = new Date(currYear - 1, 11, 31)
    const diffTime = Math.abs(today - december31)
    const currDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const hue = (currDays * 360) / daysInYear
    const rounded = Math.round(hue)
    return rounded
  },
  getSaturation(curr) {
    const [min, max] = [-10, 30]
    let normalize = curr
    if (curr < min) {
      normalize = min
    } else if (curr > max) {
      normalize = max
    }
    const saturation = normalize / ((max - min) / 100)
    const rounded = Math.round(saturation)
    return rounded
  },
  getLightness() {
    const today = new Date()
    const hours = today.getHours()
    const minutes = today.getMinutes()
    const totalMinutes = hours * 60 + minutes
    // 23:59 = 1439 minutes / 100 = 14.39
    const lightness = totalMinutes / 14.39
    const rounded = Math.round(lightness)
    return 100 - rounded
  },
}
