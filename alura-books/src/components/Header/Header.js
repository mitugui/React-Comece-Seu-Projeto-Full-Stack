import './style.css'
import Logo from '../Logo/Logo'
import HeaderOptions from '../HeaderOptions/HeaderOptions'
import HeaderIcons from '../HeaderIcons/HeaderIcons'

function Header() {
    return (
        <header className="App-header">
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
        </header>
    )
}

export default Header