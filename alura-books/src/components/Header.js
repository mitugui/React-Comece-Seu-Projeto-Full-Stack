import Logo from '../Logo/Logo'
import HeaderOptions from '../HeaderOptions/HeaderOptions'
import HeaderIcons from '../HeaderIcons/HeaderIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
        </HeaderContainer>
    )
}

export default Header