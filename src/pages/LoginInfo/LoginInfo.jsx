import BackButton from "../../components/BackButton";

export default function LoginInfo() {
  return (
    <div className="container">
        <BackButton />

        <h3 className="page-title">Informações de Login</h3>

        <div className="wrapper">
            <p className="title">Email</p>
            <span className="content">marvin.mckinney@example.com</span>
        </div>

        <div className="wrapper">
            <p className="title">Senha</p>
            <span className="content">*********</span>
        </div>
    </div>
  );
}
