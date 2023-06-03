/* eslint-disable react/prop-types */
import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Item({ icon, text, to, showCaret = true, textColor }) {
    const itemStyle = {
        color: textColor || 'inherit'
    }

    return (
        <div className="item">
            <Link to={to}>
                {icon}
                <p style={itemStyle}>{text}</p>
                {showCaret && <CaretRight />}
            </Link>
        </div>
    )
}