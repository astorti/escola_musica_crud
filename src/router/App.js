import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from "../components/Header";
import InstrumentList from "../components/instruments/InstrumentList";
import TeacherList from "../components/teachers/TeacherList";
import StudentList from "../components/students/StudentList";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route component={InstrumentList} path='/instruments' exact={true}/>
          <Route component={TeacherList} path='/teachers' exact={true}/>
          <Route component={StudentList} path='/students' exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
