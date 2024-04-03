import './style.css'

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function HeaderOptions() {
    return (
        <ul className="options">
          {optionsText.map((text) => (
            <li className="option">{text.toUpperCase()}</li>
          ))}
        </ul>
    )
}

export default HeaderOptions