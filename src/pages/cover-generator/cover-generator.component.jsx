import React, {useState} from 'react';

import Select from "react-select";
import Header from "../../components/header/header.component"
import {TextField, Button, FormControl } from '@material-ui/core';
import { avaibleSemesters, avaibleUniversities } from '../../utils/generator-cover.utils';
import axios from 'axios';
import download from 'downloadjs';

import "./cover-generator.styles.scss"

const CoverGenerator = () => {
    const [students, setStudents] = useState([""]);
    const [careerName, setCareerName] = useState("");
    const [title, setTitle] = useState("");
    const [courseName, setCourseName] = useState("");
    const [university, setUniversity] = useState({});
    const [semester, setSemester] = useState("");

    const addStudent = () => {
        let newStudents = [...students];
        newStudents.push("");
        setStudents(newStudents)
    }

    const onChangeStudent = (e) => {
        const index = e.currentTarget.getAttribute('akey');
        students[index] = e.target.value;
    }

    const onChangeUniversity = (e) => {
        setUniversity(e)
        console.log(university)
    }

    const onChangeCareerName = (e) => {
        setCareerName(e.target.value);
    }

    const onChangeCourseName = (e) => {
        setCourseName(e.target.value);
    }

    const onChangeSemester = (e) => {
        setSemester(e.value);
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onSubmit = () => {
        axios({
            url: 'http://localhost:8000',
            method: 'GET',
            responseType: 'blob', // important
            params: {
                university,
                careerName,
                title,
                students,
                semester,
                courseName
            }
        }).then(
            (res) => {
                console.log(res)
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'caratula.pdf');
                document.body.appendChild(link);
                link.click();
            }
        )
    }
    return <div className="cover-generator">
        <Header/>
        <FormControl className="content">
            <div className="general-data">
                <h2>Generador de Caratulas</h2>
                <TextField id="outlined-basic" label="Carrera" variant="outlined" className="text-field" onChange={onChangeCareerName}/>
                <TextField id="outlined-basic" label="Curso" variant="outlined" className="text-field" onChange={onChangeCourseName}/>
                <TextField id="outlined-basic" label="Titulo del Trabajo" variant="outlined" className="text-field" onChange={onChangeTitle}/>
                <div className="select-options">
                    <Select placeholder="Universidad o Instituto" options={avaibleUniversities} className="text-field-options" onChange={onChangeUniversity}></Select>
                    <Select placeholder="Semestre" options={avaibleSemesters} className="text-field-options" onChange={onChangeSemester}></Select>
                </div>
                <Button variant="contained" color="primary" className="button" type="submit" onClick={onSubmit}>Generar Caratula</Button>
            </div>
            <div className="students-data">
                {
                    students.map(
                        (student, i) => <input 
                                            placeholder={"Nombre y Apellido del Integrante " + (i+1)} 
                                            className="text-field-student" 
                                            akey={i} 
                                            key={i} 
                                            onChange={onChangeStudent}
                                        />
                    )
                }
                {
                    students.length < 7?
                        <Button variant="contained" color="secondary" className="rounded-button" onClick={addStudent}>+ Agregar Integrante</Button>
                    : null
                }
            </div>
        </FormControl>
    </div>

}

export default CoverGenerator;