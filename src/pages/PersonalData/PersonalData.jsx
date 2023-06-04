import BackButton from '../../components/BackButton'

// eslint-disable-next-line react/prop-types
export default function PersonalData() {
    return (
        <div className="container">
            <BackButton />

            <h3 className="page-title">Dados Pessoais</h3>
            <div className="wrapper">
                <p className="title">Nome de usuário</p>
                <span className="content">@marvin.mckinney</span>
            </div>

            <div className="wrapper">
                <p className="title">Número de telefone</p>
                <span className="content">+55 11 4002-8922</span>
            </div>

            <div className="wrapper">
                <p className="title">Data de nascimento</p>
                <span className="content">01 de setembro de 2004</span>
            </div>

            <div className="wrapper">
                <p className="title">País de origem</p>
                <span className="content">Brasil</span>
            </div>
        </div>
    )
}