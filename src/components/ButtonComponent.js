/**
 * ButtonComponent
 *
 * A button consisting of an image and text
 *
 * **Props**:
 * - `url`: String - button link
 * - `color`: String - button color
 * - `img`: Object - image object
 *     - `url`: String - image url
 *     - `alt`: String - image alt text
 * - `text`: String - button text
 */
export default class ButtonComponent extends HTMLElement {
  /**
   *
   * @param {object} props - Component props
   */
  constructor(props) {
    super()
    this.props = props
    const template = document.getElementById('button-component')
    const shadow = this.attachShadow({ mode: 'open' })
    const copy = template.content.cloneNode(true)
    this.classList.add('inline-block')
    const elements = {
      link: copy.querySelector('a'),
      iconWrapper: copy.querySelector('[data-name="iconWrapper"]'),
      icon: copy.querySelector('img'),
      text: copy.querySelector('[data-name="text"]'),
    }
    const cssClasses = [
      'dark:bg-gray-200',
      'dark:text-gray-900',
      'dark:hover:bg-gray-400',
      'dark:hover:text-gray-100',
    ]
    switch (props.color) {
      case 'red':
        cssClasses.push(
          'bg-red-400',
          'text-red-900',
          'hover:bg-red-500',
          'hover:text-red-100'
        )
        break
      case 'yellow':
        cssClasses.push(
          'bg-yellow-400',
          'text-yellow-900',
          'hover:bg-yellow-500',
          'hover:text-yellow-100'
        )
        break
      default:
        cssClasses.push(
          'bg-gray-400',
          'text-gray-900',
          'hover:bg-gray-500',
          'hover:text-gray-100'
        )
        break
    }
    elements.link.classList.add(...cssClasses)

    elements.link.href = props.url
    elements.icon.src = props.img.url
    elements.icon.alt = props.img.alt
    elements.text.textContent = props.text

    shadow.appendChild(copy)
  }
}
customElements.define('button-component', ButtonComponent)
