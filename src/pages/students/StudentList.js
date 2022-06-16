import React, { useEffect, useState} from "react";
import '../../styles/teacherStudentList.css';
import { Link } from "react-router-dom";

const StudentList = () => {

    const [ student, setStudent ] = useState([])

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('students'));
        if (storage) {
            setStudent(storage)
        }
    },[])
       
    return(
        <div className="container">
            
            <h2>Alunos</h2>
            
            <Link className="new" to='/studentform'>Novo Cadastro</Link>

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
                                    <input className="view" type="submit" value='Consultar'/>
                                    <input className="edit" type="submit" value='Editar'/>
                                    <input className="exclude" type="submit" value='Excluir'/>
                                </div>
                            </tr>
                        )
                    })}
                    
                </tbody>          
                
            
            
        </div>
    )
}

export default StudentList;