import BackButton from "../../components/BackButton";

export default function LinkedDevices() {
    return (
        <div className="container linked-devices">
            <BackButton />

            <h3 className="page-title">Aparelhos conectados</h3>

            <div className="wrapper">
                <p>Xiaomi Redmi Note 8 <span>&#40;Aparelho atual&#41;</span></p>
            </div>
        </div>
    )
}