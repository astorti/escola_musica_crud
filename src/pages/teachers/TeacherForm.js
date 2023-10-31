import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from 'uuid';
import "../../styles/teacherStudentForm.css";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const NewTeacherForm = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [instrument, setInstrument] = useState('')
    const [adress, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [upDate, setUpDate] = useState('');
    

    const handleSubmitTeacher = (e) => {
        e.preventDefault();
        api.post(`/teachers`, {
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

        navigate('/teachers')
    }

    useEffect(() => {
        let currentTeacher = localStorage.getItem("teacher")
        let teacher = JSON.parse(currentTeacher)
        setUpDate(teacher.id)
        setName(teacher.name);
        setInstrument(teacher.instrument);
        setAdress(teacher.adress);
        setCity(teacher.city);
        setState(teacher.state);
        setEmail(teacher.email);
        setPhone(teacher.phone);
        console.log(teacher)
    }, [])

    const handleEdit = () => {
        api.put(`/teachers/${upDate}`, {
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
        setUpDate('')
        navigate("/teachers")
    }

    return(
        <div className="container">
            <h1>Novo Cadastro</h1>
            <h2>Professor</h2>
            <div className="form-add">
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
                        <button className="save-form-button" type="submit" >Salvar</button>
                        <button onClick={handleEdit} className="edit-form-button" >Atualizar</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default NewTeacherForm;