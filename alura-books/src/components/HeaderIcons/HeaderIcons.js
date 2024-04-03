import './style.css'
import profile from '../../img/profile.svg'
import shopping_bag from '../../img/shopping-bag.svg'

const icons = [profile, shopping_bag]

function HeaderIcons() {
    return (
        <ul className="icons">
            {icons.map((icon) => (
                <li className="icon">
                    <img
                        src={icon}
                        draggable="false">
                    </img>
                </li>
            ))}
        </ul>
    )
}

export default HeaderIcons