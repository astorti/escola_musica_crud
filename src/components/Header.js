import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <h1>Escola Musical</h1>
            <div>
                <NavLink to='/' className='link' activeClassName='active' exact>
                    Home
                </NavLink>
                <NavLink to='/instruments' className='link' activeClassName='active' exact>
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