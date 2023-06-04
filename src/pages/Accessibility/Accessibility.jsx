import { CaretRight } from "@phosphor-icons/react"
import BackButton from "../../components/BackButton"
import ToggleButton from "../../components/toggleButton/index"

export default function Accessibility() {
    return (
        <div className="container accessibility">
            <BackButton />

            <h3 className="page-title">Acessibilidade</h3>

            <div className="wrapper">
                <span>Tamanho de fonte</span>
                <CaretRight />
            </div>

            <div className="wrapper">
                <span>Leitor de tela</span>
                <ToggleButton />
            </div>
        </div>
    )
}