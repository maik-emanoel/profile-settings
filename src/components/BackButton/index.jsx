import { Link } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react"

export default function BackButton() {
    return(
        <Link to="/" style={{width: 'fit-content'}}>
            <CaretLeft />
        </Link>
    )
}