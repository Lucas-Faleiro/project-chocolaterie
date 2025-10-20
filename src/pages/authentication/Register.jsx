import { Header } from "../../components";
import InputBox from "../../components/custom/inputBox";

function Register() {
  return (
    <>
      <Header />
      <InputBox placeholder="Username" />
      <InputBox type="password" placeholder="Password" />
    </>
  );
}

export default Register;
