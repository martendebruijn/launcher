// Component imports
import GreetingComponent from './components/GreetingComponent'
import CardComponent from './components/CardComponent'

// Data imports
import cards from './data/cards'

const elements = {
  app: document.getElementById('app'),
  greeting: document.getElementById('greeting'),
  grid: document.getElementById('grid'),
}

function addComponent(target, Component, instance) {
  const component = new Component(instance)
  target.appendChild(component)
}

addComponent(elements.greeting, GreetingComponent)
cards.forEach((card) => {
  addComponent(elements.grid, CardComponent, card)
})
