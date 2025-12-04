import { useContext, useState } from "react";
import { Button, Header } from "../../components";
import { Link } from "react-router";
import Authentication from "../../services/Authentication";
import errorData from "./errorData";
import ToastContext from "../../context/ToastContext";
import Input from "../../components/custom/Input";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(errorData);
  const [loading, setLoading] = useState(false);
  const { showToast } = useContext(ToastContext);

  const handleRegister = async () => {
    setErrorMessage(errorData);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      setErrorMessage((prev) => ({
        ...prev,
        email: { message: "Email é obrigatório", visible: true },
      }));
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMessage((prev) => ({
        ...prev,
        email: { message: "Email inválido", visible: true },
      }));
      return;
    }

    if (password === "") {
      setErrorMessage((prev) => ({
        ...prev,
        password: { message: "Senha é obrigatório", visible: true },
      }));
      return;
    }
    if (password.length < 6) {
      setErrorMessage((prev) => ({
        ...prev,
        password: {
          message: "Senha precisa conter pelo menos 6 caractéres",
          visible: true,
        },
      }));
      return;
    }
    if (confirmPassword === "") {
      setErrorMessage((prev) => ({
        ...prev,
        confirmPassword: {
          message: "Senha de confirmação é obrigatório",
          visible: true,
        },
      }));
      return;
    }
    if (confirmPassword !== password) {
      setErrorMessage((prev) => ({
        ...prev,
        confirmPassword: {
          message: "Senha de confirmação não está igual a senha",
          visible: true,
        },
      }));
      return;
    }
    try {
      setLoading(true);
      const { data, error } = await Authentication.register(email, password);
      console.log(data);
      if (error) {
        throw error;
      }
      showToast("Registro realizado com sucesso!", "success");
    } catch (error) {
      showToast("Erro ao realizar registro.", "error");
      console.error("Falha no registro", error);
    }
    setLoading(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-start min-h-[calc(100dvh-74px)]">
        <div className="flex flex-col gap-2 px-14 mt-10 w-md shadow-lg h-96 justify-center">
          <div className="font-[roboto] font-bold italic text-3xl text-center text-theme-green mb-2">
            Seja bem vindo!
          </div>
          <Input
            type="email"
            placeholder="E-mail"
            labelId="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={
              errorMessage.email.visible ? errorMessage.email.message : null
            }
          />
          <Input
            type="password"
            placeholder="Senha"
            labelId="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={
              errorMessage.password.visible
                ? errorMessage.password.message
                : null
            }
          />
          <Input
            type="password"
            placeholder="Confirmar Senha"
            labelId="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errorMessage={
              errorMessage.confirmPassword.visible
                ? errorMessage.confirmPassword.message
                : null
            }
          />
          {loading ? (
            <div>Registrando...</div>
          ) : (
            <Button
              className="bg-pink-400 text-white font-[roboto] font-bold italic rounded-full px-6 py-2 h-12 self-center hover:bg-pink-500 shadow-md cursor-pointer mt-4"
              onClick={handleRegister}
            >
              Registrar
            </Button>
          )}
          <Link
            to="/login"
            className="text-center text-pink-400 hover:underline font-[roboto]"
          >
            Entrar
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
