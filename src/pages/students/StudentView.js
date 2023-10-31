import React from "react";
import '../../styles/viewPage.css';

const StudentView = () => {
    
    let currentStudent = localStorage.getItem("student")
    let student = JSON.parse(currentStudent)

    return(
        <div className="container">
            <h2>Aluno {student.name}</h2>
            <div className="listView">
                <div className="itemListView">
                    <span>Instrumento :</span>
                    <h3>{student.instrument}</h3>
                </div>
                <div className="itemListView">
                    <span>Endereço :</span>
                    <h3>{student.adress}</h3>
                </div>
                <div className="itemListView">
                    <span>Cidade :</span>
                    <h3>{student.city}</h3>
                </div>
                <div className="itemListView">
                    <span>Estado :</span>
                    <h3>{student.state}</h3>
                </div>
                <div className="itemListView">
                    <span>E-mail :</span>
                    <h3>{student.email}</h3>
                </div>
                <div className="itemListView">
                    <span>Telefone :</span>
                    <h3>{student.phone}</h3>
                </div>
            </div>
        </div>
    )
}

export default StudentView;