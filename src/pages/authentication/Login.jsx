import { Button, Header } from "../../components";
import InputBox from "../../components/custom/inputBox";
import { Link } from "react-router";

function Login() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-start min-h-[calc(100dvh-74px)]">
        <div className="flex flex-col gap-2 px-14 mt-10 w-md shadow-lg h-96 justify-center">
          <div className="font-[roboto] font-bold italic text-3xl text-center text-bg-header mb-2">
            Seja bem vindo!
          </div>
          <InputBox type="email" placeholder="E-mail" labelId="email" />
          <InputBox type="password" placeholder="Senha" labelId="password" />
          <Button
            className="bg-pink-400 text-white font-[roboto] font-bold italic rounded-full px-6 py-2 h-12 self-center
           hover:bg-pink-500 shadow-md cursor-pointer mt-4"
          >
            Entrar
          </Button>
          <Link
            to="/register"
            className="text-center mt-4 text-pink-400 hover:underline font-[roboto]"
          >
            Registrar
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
