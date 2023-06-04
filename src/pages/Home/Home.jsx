import {
  Bell,
  Devices,
  Key,
  PersonArmsSpread,
  Question,
  SignOut,
  UserCircle,
  UserSwitch,
} from "@phosphor-icons/react";

import Item from "../../components/item";

export default function Home() {
  return (
    <div className="container">
      <div id="user">
        <div className="avatar">
          <img
            src="https://github.com/maik-emanoel.png"
            alt="Imagem de avatar do usuário"
          />
        </div>

        <div className="info">
          <strong>Marvin Mckinney</strong>
          <p>marvin.mckinney@example.com</p>
        </div>
      </div>

      <div id="options">
        <div className="option-wrapper">
          <h2 className="title">Conta</h2>

          <Item
            icon={<UserCircle size={20} />}
            text="Dados Pessoais"
            to="/personal-data"
          />
          <Item
            icon={<Key size={20} />}
            text="Informações de login"
            to="/login-info"
          />
        </div>

        <div className="option-wrapper">
          <h2 className="title">Preferências</h2>

          <Item
            icon={<Bell size={20} />}
            text="Notificações"
            to="/notifications"
          />
          <Item
            icon={<PersonArmsSpread size={20} />}
            text="Acessibilidade"
            to="/accessibility"
          />
        </div>

        <div className="option-wrapper">
          <h2 className="title">Privacidade</h2>

          <Item
            icon={<Devices size={20} />}
            text="Aparelhos conectados"
            to="/personal-data"
          />
          <Item
            icon={<UserSwitch size={20} />}
            text="Contas vinculadas"
            to="/login-info"
          />
        </div>

        <div className="option-wrapper">
          <Item
            icon={<Question size={20} />}
            text="Central de Ajuda"
            showCaret={false}
          />
          <Item
            icon={<SignOut size={20} color="#AA2222" />}
            text="Sair"
            showCaret={false}
            textColor="#AA2222"
          />
        </div>
      </div>
    </div>
  );
}
