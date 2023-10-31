import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/teacherStudentList.css';
import { api } from "../../services/api";

const TeacherList = () => {

    const navigate = useNavigate();

    const [teacher, setTeacher] = useState([])

    useEffect(() => {
        handleListTeachers();
    }, [teacher])

    const handleListTeachers = async () => {
        try {
            const { data } = await api.get(`/teachers`);
            setTeacher(data)
        } catch (e) {
            alert("Houve uma falha no sistema");
        }
    }

    const handleDelete = (id) => {
        api.delete(`/teachers/${id}`)
        handleListTeachers();
    }

    const handleView = (teacherList) => {
        localStorage.setItem('teacher', JSON.stringify(teacherList))
        navigate('/teacherview')
    }

    const handleEdit = (teacherList) => {
        localStorage.setItem('teacher', JSON.stringify(teacherList))
        navigate('/teacherform')
    }

    const handleNewTeacher = () => {
        let newTeacher = []
        localStorage.setItem('teacher', JSON.stringify(newTeacher))
        navigate('/teacherform')
    }

    return(
        <div className="container">
            
            <h2>Professores</h2>
            
            <button onClick={handleNewTeacher} className="new" >Novo Cadastro</button>

                <thead className="list-teacher-student">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Instrumento</th>
                        <th>Ações</th>
                    </tr>
                </thead>  

                <tbody>
                    {teacher.map(teacherList => {
                        return (
                            <tr className="table-body">
                                <td>{teacherList.name}</td>
                                <td>{teacherList.email}</td>
                                <td>{teacherList.phone}</td>
                                <td>{teacherList.instrument}</td>
                                <div className="button-align">
                                    <input onClick={ () => handleView(teacherList)} className="view" type="submit" value='Consultar'/>
                                    <input onClick={ () => handleEdit(teacherList)} className="edit" type="submit" value='Editar'/>
                                    <input
                                        onClick={() => handleDelete(teacherList.id)}
                                        className="exclude"
                                        type="submit"
                                        value='Excluir'
                                    />
                                </div>
                            </tr>
                        )
                    })}    
                </tbody>                      
        </div>
    )
}

export default TeacherList;