import { useContext } from 'react'

import HeaderMenuElement from "./MenuElement/HeaderMenuElement"
import CustomButton from '../CustomButton/CustomButton'
import HeaderUserInfo from './UserMenuElement/HeaderUserInfo'

import './Header.css'
import logo from '../assets/logo.png'
import { UserContext } from '../contexts/UserContext'

function Header() {
    let { getCreditials } = useContext(UserContext)
    let { userId, userName, isAuth } = getCreditials()

    return (
        <header className="header header">
            <div className="header__wrapper">
                <img src={ logo } alt="logo" className="header__logo" />

                <div className="header__menu">
                    <HeaderMenuElement> How it works? </HeaderMenuElement>
                    <HeaderMenuElement> Features </HeaderMenuElement>
                    <HeaderMenuElement> About us </HeaderMenuElement>
                    {
                        isAuth ?
                        <HeaderUserInfo userId={ userId } userName={ userName } />
                        :
                        <CustomButton color='white' blockName="header"> Login </CustomButton>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header