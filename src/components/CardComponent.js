import ButtonComponent from './ButtonComponent'

/**
 * CardComponent
 *
 * A card with buttons
 *
 *   **Props**:
 * - `header`: String - card header text
 * - `buttons`: Array - Array of ButtonComponent instances
 * - `color`: String - theme of card
 */
export default class CardComponent extends HTMLElement {
  /**
   *
   * @param {object} props - Component props
   */
  constructor(props) {
    super()
    this.props = props
    const template = document.getElementById('card-component')
    const shadow = this.attachShadow({ mode: 'open' })
    const copy = template.content.cloneNode(true)
    this.classList.add('inline-block')
    const elements = {
      header: copy.querySelector('h3'),
      list: copy.querySelector('ul'),
      wrapper: copy.querySelector('div'),
    }
    const cssClasses = [
      'dark:bg-slate-700',
      'dark:text-gray-100',
      'dark:border-2',
      'dark:border-white',
    ]
    switch (props.color) {
      case 'red':
        cssClasses.push('bg-red-200', 'text-red-900')
        break
      case 'yellow':
        cssClasses.push('bg-yellow-200', 'text-yellow-900')
        break
      default:
        cssClasses.push('bg-gray-200', 'text-gray-900')
        break
    }
    elements.wrapper.classList.add(...cssClasses)

    props.buttons.forEach((button) => {
      const listItem = document.createElement('li')
      listItem.classList.add('list-none')
      const buttonProps = { color: props.color, ...button }
      const buttonInstance = new ButtonComponent(buttonProps)
      elements.list.appendChild(listItem)
      listItem.appendChild(buttonInstance)
    })
    elements.header.textContent = props.header

    shadow.appendChild(copy)
  }
}
customElements.define('card-component', CardComponent)
