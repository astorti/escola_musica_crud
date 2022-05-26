import React, { useState } from "react";
import '../../styles/instruments.css';
import { v1 as uuidv1 } from 'uuid';
import '../../index.css'

const InstrumentList = () => {

    const [ instrument, setInstrument ] = useState([]);
    const [ nameInstrument, setNameInstrument ] = useState('');
    const [ noData, setNoData ] = useState(true)

    const handleSaveInstrument = (e) => {
        e.preventDefault();
        let newInstrument = {
            id: uuidv1(),
            nameInstrument
        }
        setInstrument([newInstrument, ...instrument]);
        setNameInstrument('');
        hasData()
        console.log(instrument)
    }

    const handleCancelInput = () => {
        setNameInstrument('');
    }

    const handleEdit = () => {
        alert("editado")
    }

    const hasData = () => {
        if (noData) {
            setNoData(false)
        }
    }

    return(
        <div className="container">

            <div>
                <h1>Cadastro de Instrumentos</h1>
             </div>
             
            <form onSubmit={handleSaveInstrument}>
                <input type="text" placeholder="Novo Instrumento" value={nameInstrument} required onChange={(e) => setNameInstrument(e.target.value)} />
                <input type="submit" className="save-button" value="Salvar" />
                <button onClick={handleCancelInput} className="cancel-button">Cancelar</button>
            </form>

            <h2>Instrumentos</h2>
            
            <div className="list"> 
                {noData === true ? 
                    (<span>Não há instrumentos cadastrados</span>
                ) : (         
                    <ul>
                        { instrument.map(instrumenList => {
                            return (
                                <li>
                                    {instrumenList.nameInstrument}
                                    <div>
                                        <input onClick={handleEdit} className="edit" type="submit" value='Editar'/>
                                        <input className="exclude" type="submit" value='Excluir'/>
                                    </div>
                                </li>
                        )})}        
                    </ul>
                )}
            </div>
            
        </div>
    )
}

export default InstrumentList;