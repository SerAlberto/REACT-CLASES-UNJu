import React, { useState } from "react";
import { Badge, Form, Button, Col, Row } from "react-bootstrap";

export function validacion(input) {
  let erroresValidacion = {};
  if (!input.email) {
    erroresValidacion.email = "El campo Email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    erroresValidacion.email = "El campo ingresado debe ser un Email";
  }
  if (!input.asunto) {
    erroresValidacion.asunto = "El campo Asunto es requerido";
  } else if (!/^[\s\S]{10,}$/.test(input.asunto)) {
    erroresValidacion.asunto =
      "El campo ingresado debe tener un mínimo de 10 caracteres";
  }
  if (!input.mensaje) {
    erroresValidacion.mensaje = "El campo Mensaje es requerido";
  } else if (!/^[\s\S]{1,256}$/.test(input.mensaje)) {
    erroresValidacion.mensaje =
      "El campo ingresado debe tener un máximo de 256 caracteres";
  }
  return erroresValidacion;
}

export default function About() {
  const [state, setState] = useState({
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({
    email: " ",
    asunto: " ",
    mensaje: " ",
  });

  function onHandleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    setErrores(
      validacion({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  }

  function onSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2>
        <Badge>Sergio Alberto Montesino</Badge>
      </h2>
      <p>Vivo en San Pedro de Jujuy y estudio Ingeniería en Informática </p>
      <p>
        Me encanta el diseño de páginas web y me gustaría aprender a utilizar
        React perfectamente aplicando buenas prácticas
      </p>

      <Form className="bg-primary p-5 mt-5" onSubmit={(e) => onSubmitForm(e)}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Correo Electrónico
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={state.email}
              name="email"
              type="text"
              onChange={(e) => onHandleChange(e)}
              placeholder="Introduzca su email"
            />
          </Col>
          {errores.email && (
            <Form.Text className="text-danger">{errores.email}</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAsunto">
          <Form.Label column sm={2}>
            Asunto
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={state.asunto}
              name="asunto"
              type="text"
              onChange={(e) => onHandleChange(e)}
              placeholder="Ingrese el Asunto"
            />
          </Col>
          {errores.asunto && (
            <Form.Text className="text-danger">{errores.asunto}</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalMensaje">
          <Form.Label column sm={2}>
            Mensaje
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={state.mensaje}
              name="mensaje"
              as="textarea"
              onChange={(e) => onHandleChange(e)}
              placeholder="Ingrese su mensaje"
              style={{ height: "100px" }}
            />
          </Col>
          {errores.mensaje && (
            <Form.Text className="text-danger">{errores.mensaje}</Form.Text>
          )}
        </Form.Group>

        <Button
          disabled={errores.mensaje || errores.asunto || errores.email}
          variant="primary"
          type="submit"
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
}

/* class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>
          <b>Sergio Alberto Montesino</b>
        </p>
        <p>Vivo en San Pedro de Jujuy y estudio Ingeniería en Informática </p>
        <p>
          Mi deseo es aprender a diseñar páginas web mediante la total
          utilización de React y aplicando buenas prácticas
        </p>
      </div>
    );
  }
}

export default About; */
