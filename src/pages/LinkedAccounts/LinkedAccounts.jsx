import BackButton from "../../components/BackButton";

export default function LinkedAccounts() {
    return (
        <div className="container">
            <BackButton />

            <h3 className="page-title">Contas vinculadas</h3>
            <p className="empty-page">Você não tem nenhuma conta vinculada neste momento</p>
        </div>
    )
}