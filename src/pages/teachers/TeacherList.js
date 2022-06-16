import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/teacherStudentList.css';

const TeacherList = () => {

    const [ teacher, setTeacher ] = useState([])

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('teachers'));
        if (storage) {
            setTeacher(storage)
        }
    }, [])

    const handleDelete = (id) => {
        let filterTeacher = teacher.filter((teacherList) => {
            return(teacherList.id !== id)
        })

        setTeacher(filterTeacher);
        localStorage.setItem('teachers', JSON.stringify(filterTeacher))
    }

    return(
        <div className="container">
            
            <h2>Professores</h2>
            
            <Link className="new" to='/teacherform'>Novo Cadastro</Link>

            <div className="list-teacher-student">  
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Instrumento</th>
                        <th scope="col">Ações</th>
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
                                    <input className="view" type="submit" value='Consultar'/>
                                    <input className="edit" type="submit" value='Editar'/>
                                    <input onClick={ () => handleDelete(teacherList.id)} className="exclude" type="submit" value='Excluir'/>
                                </div>
                            </tr>
                        )
                    })}
                    
                </tbody>          
                
            </div>
            
        </div>
    )
}

export default TeacherList;