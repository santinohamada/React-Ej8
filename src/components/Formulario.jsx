import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Formulario = () => {
    const [form,setForm] = useState({})
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, apellido, DNI, email } = form;

        if (!nombre || !apellido || !DNI || !email) {
            alert("Por favor, complete todos los campos.");
        } else {
            console.log(form);
            alert("Datos enviados");
            // Aquí podrías enviar los datos al servidor
        }
    };
    return (
        <>
           <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" onChange={handleChange} name='nombre' placeholder="ingrese su nombre" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" onChange={handleChange} name='apellido' placeholder="ingrese su apellido" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDNI">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="number"onChange={handleChange} name='DNI' placeholder="ingrese su DNI" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"onChange={handleChange} name='email' placeholder="ingrese su email" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
    );
};

export default Formulario;