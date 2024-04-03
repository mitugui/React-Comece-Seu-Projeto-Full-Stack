import './App.css'
import Logo from './components/Logo'
import profile from './img/profile.svg'
import shopping_bag from './img/shopping-bag.svg'

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icons = [profile, shopping_bag]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className="options">
          {optionsText.map((text) => (
            <li className="option">{text.toUpperCase()}</li>
          ))}
        </ul>
        <ul className="icons">
          {icons.map((icon) => (
            <li className="icon"><img src={icon}></img></li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App