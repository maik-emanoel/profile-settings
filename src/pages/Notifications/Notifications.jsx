import BackButton from "../../components/BackButton";
import ToggleButton from "../../components/toggleButton";

export default function Notifications() {
    return (
        <div className="container">
            <BackButton />

            <h3 className="page-title">Notificações</h3>
            <div className="notification-wrapper">
                <span>Notificações push</span>
                <ToggleButton />
            </div>
        </div>
    )
}