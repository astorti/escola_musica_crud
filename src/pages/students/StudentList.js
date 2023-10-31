import React, { useEffect, useState} from "react";
import '../../styles/teacherStudentList.css';
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const StudentList = () => {

    const navigate = useNavigate();

    const [ student, setStudent ] = useState([])

    useEffect(() => {
        handleListStudents();
    }, [student])

    const handleListStudents = async () => {
        try {
            const { data } = await api.get(`/students`);
            setStudent(data)
        } catch (e) {
            alert("Houve uma falha no sistema");
        }
    }

    const handleDelete = (id) => {
        api.delete(`/students/${id}`)
        handleListStudents();
    }

    const handleView = (studentList) => {
        localStorage.setItem('student', JSON.stringify(studentList))
        navigate('/studentview')
    }

    const handleEdit = (studentList) => {
        localStorage.setItem('student', JSON.stringify(studentList))
        navigate('/studentform')
    }

    const handleNewStudent = () => {
        let newStudent = []
        localStorage.setItem('student', JSON.stringify(newStudent))
        navigate('/studentform')
    }

    return(
        <div className="container">
            
            <h2>Alunos</h2>
            
            <button onClick={handleNewStudent} className="new">Novo Cadastro</button>

                <thead className="list-teacher-student">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Instrumento</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>  

                <tbody>
                    {student.map(studentList => {
                        return (
                            <tr className="table-body">
                                <td>{studentList.name}</td>
                                <td>{studentList.email}</td>
                                <td>{studentList.phone}</td>
                                <td>{studentList.instrument}</td>
                                <div className="button-align">
                                    <input onClick={ () => handleView(studentList)} className="view" type="submit" value='Consultar'/>
                                    <input onClick={ () => handleEdit(studentList)} className="edit" type="submit" value='Editar'/>
                                    <input
                                        onClick={() => handleDelete(studentList.id)}
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

export default StudentList;