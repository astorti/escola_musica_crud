import React from "react";
import '../../styles/teacherStudentList.css';
import { Link } from "react-router-dom";

const StudentList = () => {
    return(
        <div className="container">
            
            <h2>Alunos</h2>
            
            <Link className="new" to='/studentform'>Novo Cadastro</Link>

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
                    <tr className="table-body">
                        <td>Aluno1</td>
                        <td>aluno1@mail.com</td>
                        <td>(xx) 1234-5678</td>
                        <td>Violão</td>
                        <div className="button-align">
                            <input className="view" type="submit" value='Consultar'/>
                            <input className="edit" type="submit" value='Editar'/>
                            <input className="exclude" type="submit" value='Excluir'/>
                        </div>
                    </tr>

                    <tr className="table-body">
                        <td>Aluno2</td>
                        <td>aluno2@mail.com</td>
                        <td>(xx) 1234-5678</td>
                        <td>Piano</td>
                        <div>
                            <input className="view" type="submit" value='Consultar'/>
                            <input className="edit" type="submit" value='Editar'/>
                            <input className="exclude" type="submit" value='Excluir'/>
                        </div>
                    </tr>
                </tbody>          
                
            </div>
            
        </div>
    )
}

export default StudentList;