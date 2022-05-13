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
    this.classList.add('inline-block')
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

    elements.emoji.textContent = text.emoji
    elements.greeting.textContent = text.greeting
    shadow.appendChild(copy)
  }
}
customElements.define('greeting-component', GreetingComponent)
