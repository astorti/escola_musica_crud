import React from "react";
import '../../styles/instruments.css';

const InstrumentList = () => {

    const handleEdit = () => {
        console.log("OK")
    }

    return(
        <div className="container">
            <div>
                <h1>Cadastro de Instrumentos</h1>
            </div>
            <form>
                <input type="text" placeholder="Novo Instrumento" />
                <button className="save-button">Salvar</button>
                <button className="cancel-button">Cancelar</button>
            </form>

            <h2>Instrumentos</h2>
                
            <div className="list">              
                <ul>
                    <li>
                        Violão
                        <div>
                            <input onClick={handleEdit} className="edit" type="submit" value='Editar'/>
                            <input className="exclude" type="submit" value='Excluir'/>
                        </div>
                    </li>
                    <li>
                        Teclado
                        <div>
                            <input className="edit" type="submit" value='Editar'/>
                            <input className="exclude" type="submit" value='Excluir'/>
                        </div>
                    </li>
                    <li>
                        Piano
                        <div>
                            <input className="edit" type="submit" value='Editar'/>
                            <input className="exclude" type="submit" value='Excluir'/>
                        </div>
                    </li>
                    
                </ul>
            </div>
            
        </div>
    )
}

export default InstrumentList;