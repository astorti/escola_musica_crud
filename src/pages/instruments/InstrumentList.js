import React, { useState, useEffect } from "react";
import '../../styles/instruments.css';
import { v1 as uuidv1 } from 'uuid';
import '../../index.css'

import { api } from "../../services/api";

const InstrumentList = () => {

    const [instrument, setInstrument] = useState([])
    const [nameInstrument, setNameInstrument] = useState('');
    const [upDate, setUpDate] = useState('');
    
    const handleSaveInstrument = (e) => {
        e.preventDefault();
        api.post(`/instruments`, {
            id: uuidv1(),
            name: nameInstrument
        }) 
        setNameInstrument('')
    }

    useEffect(() => {
        handleListInstruments();
    }, [instrument])

    const handleListInstruments = async () => {
        try {
            const { data } = await api.get(`/instruments`);
            setInstrument(data)
        } catch (e) {
            alert("Houve uma falha no sistema");
        }
    }
    
    const handleCancelInput = () => {
        setNameInstrument('');
    }

    const handleEdit = (editInstrument) => {
        setNameInstrument(editInstrument.name)
        setUpDate(editInstrument)
    }

    const handleUpdate = () => {
        if (upDate.name === undefined) {
            alert("Este instrumento não está cadatrado. Não é possivel atualizar.")
        } else {
            api.put(`/instruments/${upDate.id}`, {
                id: upDate.id,
                name: nameInstrument
            })
            alert(upDate.name + " atualizado para " + nameInstrument)
        }
    }

    const handleDelete = (id) => {
        api.delete(`/instruments/${id}`)
        handleListInstruments()
        console.log(id)
    }
    
    return(
        <div className="container">

            <div>
                <h1>Cadastro de Instrumentos</h1>
            </div>
            
            <form >
                <input type="text" placeholder="Novo Instrumento" value={nameInstrument} required onChange={(e) => setNameInstrument(e.target.value)} />
                <button
                    onClick={handleSaveInstrument}
                    type="submit"
                    className="save-button"
                >
                    Salvar
                </button>
                <button
                    onClick={handleUpdate}
                    className="edit-button"
                >
                    Atualizar
                </button>
                <button
                    onClick={handleCancelInput}
                    className="cancel-button"
                >
                    Cancelar
                </button>

            </form>
            

            <h2>Instrumentos</h2>
            
            <div className="list"> 
                {!instrument.length ? 
                    (<span>Não há instrumentos cadastrados</span>
                ) : (         
                    <ul>
                        { instrument.map(instrumenList => {
                            return (
                                <li key={instrumenList.id}>
                                    {instrumenList.name}
                                    <div>
                                        <input
                                            onClick={() => handleEdit(instrumenList)}
                                            className="edit"
                                            type="submit"
                                            value='Editar'
                                        />
                                        <input
                                            onClick={() => handleDelete(instrumenList.id)}
                                            type='submit'
                                            className="exclude"
                                            value='Excluir'
                                        />
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