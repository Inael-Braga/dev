import React, { Children } from "react";
import './Button.css';

function Button({style, children}){
    const primaryButton = "button primary";
    const secondaryButton = "button secondary";

    const buttonClass = style === "primary" ? primaryButton : secondaryButton;

    return <button className={buttonClass}>{children}</button>;
}

export default Button;