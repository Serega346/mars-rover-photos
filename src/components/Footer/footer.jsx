import React from "react";
import style from "./style.module.css"

export const Footer = () => {
    return (
        <footer className={style.footer}>
            Made with <span role="img" aria-label="heart">&#10084;&#65039;</span>in Ukraine © 2020 Serhii Khomyn
        </footer>
    )
}