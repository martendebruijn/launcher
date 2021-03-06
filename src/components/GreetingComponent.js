import blob from '../modules/blob'
import temps from '../data/averageTemp' // Replace with API

/**
 * GreetingComponent
 *
 * A personal greeting
 *
 * **Props**:
 * - None
 */
export default class GreetingComponent extends HTMLElement {
  /**
   *
   * @param {object} props - Component props
   */
  constructor(props) {
    super()
    this.props = props
    const template = document.getElementById('greeting-component')
    const shadow = this.attachShadow({ mode: 'open' })
    const copy = template.content.cloneNode(true)
    const cssClasses = ['inline-block', 'dark:text-slate-100']
    this.classList.add(...cssClasses)
    const elements = {
      emoji: copy.querySelector('span'),
      greeting: copy.querySelector('div:first-child'),
    }

    const now = new Date()
    const hour = now.getHours()
    const text = {
      emoji: '✨',
      greeting: 'Goodmorning',
    }

    if (hour < 6 || hour >= 18) {
      text.emoji = '🌙'
      text.greeting = 'Goodevening'
    } else if (hour >= 12) {
      text.emoji = '👋'
      text.greeting = 'Goodafternoon'
    }

    const monthIndex = now.getMonth()
    const { temp } = temps[monthIndex]

    const [hue, saturation, lightness] = [
      blob.getHue(),
      blob.getSaturation(temp),
      blob.getLightness(),
    ]
    elements.emoji.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
    elements.emoji.textContent = text.emoji
    elements.greeting.textContent = text.greeting
    shadow.appendChild(copy)
  }
}
customElements.define('greeting-component', GreetingComponent)
