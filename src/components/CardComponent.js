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

    let classNames
    switch (props.color) {
      case 'red':
        classNames = ['bg-red-200', 'text-red-900']
        break
      case 'yellow':
        classNames = ['bg-yellow-200', 'text-yellow-900']
        break
      default:
        classNames = ['bg-gray-200', 'text-gray-900']
        break
    }
    classNames.forEach((className) => {
      elements.wrapper.classList.add(className)
    })

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
