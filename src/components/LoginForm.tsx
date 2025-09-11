import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form>
      {/* Email */}
      <Form.Group className="mb-3">
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-person"></i>
          </InputGroup.Text>
          <Form.Control type="email" placeholder="Digite seu E-mail..." />
        </InputGroup>
      </Form.Group>

      {/* Senha */}
      <Form.Group className="mb-3">
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-key"></i>
          </InputGroup.Text>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha..."
          />
          <Button
            variant="outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
          </Button>
        </InputGroup>
      </Form.Group>

      {/* Botão Acessar */}
      <div className="d-grid mb-3">
        <Button variant="danger" size="lg">
          ACESSAR
        </Button>
      </div>

      {/* Esqueceu a senha */}
      <div className="text-center">
        <Button variant="secondary" size="sm">
          Esqueceu a senha?
        </Button>
      </div>
    </Form>
  );
}
