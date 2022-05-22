import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "../components/Header";
import InstrumentList from "../pages/instruments/InstrumentList";
import TeacherList from "../pages/teachers/TeacherList";
import StudentList from "../pages/students/StudentList";
import NewTeacherForm from "../pages/teachers/TeacherForm";
import NewStudentForm from "../pages/students/StudentForm";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route component={InstrumentList} path='/instruments' exact={true}/>
          <Route component={TeacherList} path='/teachers' exact={true}/>
          <Route component={StudentList} path='/students' exact={true}/>
          <Route component={NewTeacherForm} path='/teacherform' exact={true}/>
          <Route component={NewStudentForm} path='/studentform' exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
