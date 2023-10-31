import React from "react";
import '../../styles/viewPage.css';

const TeacherView = () => {
    
    let currentTeacher = localStorage.getItem("teacher")
    let teacher = JSON.parse(currentTeacher)

    return(
        <div className="container">
            <h2>Professor {teacher.name}</h2>
            <div className="listView">
                <div className="itemListView">
                    <span>Instrumento :</span>
                    <h3>{teacher.instrument}</h3>
                </div>
                <div className="itemListView">
                    <span>Endereço :</span>
                    <h3>{teacher.adress}</h3>
                </div>
                <div className="itemListView">
                    <span>Cidade :</span>
                    <h3>{teacher.city}</h3>
                </div>
                <div className="itemListView">
                    <span>Estado :</span>
                    <h3>{teacher.state}</h3>
                </div>
                <div className="itemListView">
                    <span>E-mail :</span>
                    <h3>{teacher.email}</h3>
                </div>
                <div className="itemListView">
                    <span>Telefone :</span>
                    <h3>{teacher.phone}</h3>
                </div>
            </div>
        </div>
    )
}

export default TeacherView;