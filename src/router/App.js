import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import InstrumentList from "../pages/instruments/InstrumentList";
import TeacherList from "../pages/teachers/TeacherList";
import StudentList from "../pages/students/StudentList";
import NewTeacherForm from "../pages/teachers/TeacherForm";
import NewStudentForm from "../pages/students/StudentForm";
import TeacherView from "../pages/teachers/TeacherView";
import StudentView from "../pages/students/StudentView";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route element={<InstrumentList/>} path='/'/>
          <Route element={<TeacherList/>} path='/teachers' />
          <Route element={<StudentList/>} path='/students' />
          <Route element={<NewTeacherForm/>} path='/teacherform' />
          <Route element={<NewStudentForm/>} path='/studentform' />
          <Route element={<TeacherView />} path='/teacherview' />
          <Route element={<StudentView/>} path='/studentview' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
