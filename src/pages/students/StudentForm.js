import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from 'uuid';
import "../../styles/teacherStudentForm.css";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const NewStudentForm = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [instrument, setInstrument] = useState('')
    const [adress, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [upDate, setUpDate] = useState('');


    const handleSubmitStudent = (e) => {
        e.preventDefault();
        api.post(`/students`, {
            id: uuidv1(),
            name: name,
            instrument: instrument,
            adress: adress,
            city: city,
            state: state,
            email: email,
            phone: phone
        }) 
        setName('');
        setInstrument('');
        setAdress('');
        setCity('');
        setState('');
        setEmail('');
        setPhone('');

        navigate('/students')
    }

    useEffect(() => {
        let currentStudent = localStorage.getItem("student")
        let student = JSON.parse(currentStudent)
        setUpDate(student.id)
        setName(student.name);
        setInstrument(student.instrument);
        setAdress(student.adress);
        setCity(student.city);
        setState(student.state);
        setEmail(student.email);
        setPhone(student.phone);
    }, [])

    const handleEdit = () => {
        api.put(`/students/${upDate}`, {
            id: upDate,
            name: name,
            instrument: instrument,
            adress: adress,
            city: city,
            state: state,
            email: email,
            phone: phone
        })
        alert("Cadastro atualizado")
        localStorage.removeItem("student")
        setUpDate('')
        navigate("/students")
    }

    return(
        <div className="container">
            <h1>Novo Cadastro</h1>
            <h2>Aluno</h2>
            <div className="form-add">
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
                        <button className="save-form-button" type="submit" >Salvar</button>
                        <button onClick={handleEdit} className="edit-form-button" >Atualizar</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default NewStudentForm;