import logo from '../../img/logo.svg'

function Logo() {
    return (
        <div className="logo">
          <img src={logo} alt="Logo Alura Books"></img>
          <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo