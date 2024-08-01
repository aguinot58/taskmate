import logo from '../assets/logo.png'
import { useState } from 'react'

const Header = ({setActiveBG}) => {

    const [activeTheme, setActiveTheme] = useState('light');

    const onClick = (e) => {
        const newActiveTheme = e.target.className.split(' ')[0];
        setActiveTheme(newActiveTheme);
        setActiveBG(newActiveTheme);
    }

    return (
        <header>
            <div className="logo">
                <a href="/"><img src={logo} alt="logo" /></a>
                <span href="/">Taskmate</span>
            </div>
            <div className="themeSelector">
                <span className={`light ${activeTheme === 'light' ? 'activeTheme' : ''}`} onClick={onClick}></span>
                <span className={`medium ${activeTheme === 'medium' ? 'activeTheme' : ''}`} onClick={onClick}></span>
                <span className={`dark ${activeTheme === 'dark' ? 'activeTheme' : ''}`} onClick={onClick}></span>
                <span className={`gOne ${activeTheme === 'gOne' ? 'activeTheme' : ''}`} onClick={onClick}></span>
                <span className={`gTwo ${activeTheme === 'gTwo' ? 'activeTheme' : ''}`} onClick={onClick}></span>
                <span className={`gThree ${activeTheme === 'gThree' ? 'activeTheme' : ''}`} onClick={onClick}></span>
            </div>
        </header>
    )

}

export default Header