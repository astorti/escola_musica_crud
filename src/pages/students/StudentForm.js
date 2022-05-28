import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from 'uuid';
import "../../styles/teacherStudentForm.css";
import { Link } from "react-router-dom";

const NewStudentForm = () => {
    const [student, setStudent] = useState([]);
    const [name, setName] = useState('')
    const [instrument, setInstrument] = useState('')
    const [adress, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmitStudent = ((e) => {
        e.preventDefault();
        let newStudent = {
            id: uuidv1(),
            name,
            instrument,
            adress,
            city,
            state,
            email,
            phone
        }
        setStudent([newStudent, ...student])
        setName('');
        setInstrument('');
        setAdress('');
        setCity('');
        setState('');
        setEmail('');
        setPhone('');
        console.log(student)
    })

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(student));
    }, [student])

    useEffect(() => {
        const studentStorage = JSON.parse(localStorage.getItem('students'));
        if (studentStorage) {
            setStudent(studentStorage)
        }
    }, [])


    return(
        <div className="form-add">
            <h1>Novo Cadastro</h1>
            <h2>Aluno</h2>
            <div>
                <form onSubmit={handleSubmitStudent}>
                    <input type="text" placeholder="Nome" value={name} required onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Instrumento" value={instrument} required onChange={(e) => setInstrument(e.target.value)} />
                    <input type="text" placeholder="Endereço" value={adress} required onChange={(e) => setAdress(e.target.value)} />
                    <input type="text" placeholder="Cidade" value={city} required onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder="Estado" value={state} required onChange={(e) => setState(e.target.value)} />
                    <input type="text" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Telefone" value={phone} required onChange={(e) => setPhone(e.target.value)} />
                    <div className="align-input-submit">
                        <Link className="back-form-button" to='/students'>Voltar</Link>
                        <input className="save-form-button" type="submit" value="Salvar"/>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default NewStudentForm;