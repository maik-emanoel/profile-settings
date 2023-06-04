import { useState } from "react"
import './index.css'

export default function ToggleButton() {
    const [isActive, setIsActive] = useState(false)

    function handleClick() {
        setIsActive(!isActive)
    }

    return (
        <div 
            className={`toggle-button ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            <div className="toggle-button-inner"></div>
        </div>
    )
}