import React from "react";
import { Link } from "react-router-dom";
import '../../styles/teacherStudentList.css';

const TeacherList = () => {

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
                    <tr className="table-body">
                        <td>professor1</td>
                        <td>professor1@mail.com</td>
                        <td>(xx) 1234-5678</td>
                        <td>Violão</td>
                        <div className="button-align">
                            <input className="view" type="submit" value='Consultar'/>
                            <input className="edit" type="submit" value='Editar'/>
                            <input className="exclude" type="submit" value='Excluir'/>
                        </div>
                    </tr>

                    <tr className="table-body">
                        <td>Professor 2</td>
                        <td>professor2@mail.com</td>
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

export default TeacherList;