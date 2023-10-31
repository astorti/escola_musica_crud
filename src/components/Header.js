import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo_escola_musical.png';

const Header = () => {
    return(
        <header>
            <div>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            
            <div className="link">
                <NavLink to='/' className='link-first' activeClassName='active' exact>
                    Instrumentos
                </NavLink>
                <NavLink to='/teachers' className='link' activeClassName='active' exact>
                    Professores
                </NavLink>
                <NavLink to='/students' className='link' activeClassName='active' exact>
                    Alunos
                </NavLink>
            </div>
        </header>
    )
}

export default Header;