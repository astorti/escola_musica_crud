import React, { useEffect, useState } from "react";
import { v1 as uuidv1 } from 'uuid';
import "../../styles/teacherStudentForm.css";
import { Link } from "react-router-dom";

const NewTeacherForm = () => {
    const [teacher, setTeacher] = useState([]);
    const [name, setName] = useState('')
    const [instrument, setInstrument] = useState('')
    const [adress, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmitTeacher = ((e) => {
        e.preventDefault();
        let newTeacher = {
            id: uuidv1(),
            name,
            instrument,
            adress,
            city,
            state,
            email,
            phone
        }
        setTeacher([newTeacher, ...teacher])
        setName('');
        setInstrument('');
        setAdress('');
        setCity('');
        setState('');
        setEmail('');
        setPhone('');
        console.log(teacher)
    })

    useEffect(() => {
        localStorage.setItem('teachers', JSON.stringify(teacher));
    }, [teacher])

    useEffect(() => {
        const teacherStorage = JSON.parse(localStorage.getItem('teachers'));
        if (teacherStorage) {
            setTeacher(teacherStorage)
        }
    }, [])

    return(
        <div className="form-add">
            <h1>Novo Cadastro</h1>
            <h2>Professor</h2>
            <div>
                <form onSubmit={handleSubmitTeacher}>
                    <input type="text" placeholder="Nome" value={name} required onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Instrumento" value={instrument} required onChange={(e) => setInstrument(e.target.value)} />
                    <input type="text" placeholder="Endereço" value={adress} required onChange={(e) => setAdress(e.target.value)} />
                    <input type="text" placeholder="Cidade" value={city} required onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder="Estado" value={state} required onChange={(e) => setState(e.target.value)} />
                    <input type="text" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Telefone" value={phone} required onChange={(e) => setPhone(e.target.value)} />
                    <div className="align-input-submit">
                        <Link className="back-form-button" to='/teachers'>Voltar</Link>
                        <input className="save-form-button" type="submit" value="Salvar"/>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default NewTeacherForm;