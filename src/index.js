// Component imports
import GreetingComponent from './components/GreetingComponent'
import CardComponent from './components/CardComponent'

// Modules imports
import blob from './modules/blob'

// Data imports
import cards from './data/cards'
import temps from './data/averageTemp' // Replace with API

const elements = {
  app: document.getElementById('app'),
  greeting: document.getElementById('greeting'),
  grid: document.getElementById('grid'),
  blob: document.getElementById('blob'),
}

function addComponent(target, Component, instance) {
  const component = new Component(instance)
  target.appendChild(component)
}

addComponent(elements.greeting, GreetingComponent)
cards.forEach((card) => {
  addComponent(elements.grid, CardComponent, card)
})

const today = new Date()
const monthIndex = today.getMonth()
const { temp } = temps[monthIndex]

const [hue, saturation, lightness] = [
  blob.getHue(),
  blob.getSaturation(temp),
  blob.getLightness(),
]
elements.blob.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
