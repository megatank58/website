import LinkLogo from "../images/LinkLogo";
import CloseLogo from "../images/CloseLogo";
import HamburgerLogo from "../images/HamburgerLogo";
import NavbarStyles from "../styles/Navbar.module.css";
import Link from "next/link";

function OnClick() {
    let x = document.getElementById("navbar");

    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function Navbar() {
    return (
        <div className={NavbarStyles.this} id="navbar">
            <Link href="/">
                <a className={`${NavbarStyles.links} ${NavbarStyles.white} ${NavbarStyles.bold} active`}>Megatank58</a>
            </Link>
            <a href="https://discord.gg/fRVtnW8kY8" className={`${NavbarStyles.white} ${NavbarStyles.bold}`}>Discord<LinkLogo /></a>
            <a href="https://github.com/Megatank58" className={`${NavbarStyles.white} ${NavbarStyles.bold}`}>GitHub<LinkLogo /></a>
            <a href="https://github.com/CryptonDev/Crypton" className={`${NavbarStyles.white} ${NavbarStyles.bold}`}>Crypton<LinkLogo /></a>
            <a className={NavbarStyles.Hicon} onClick={OnClick}><HamburgerLogo /></a>
            <a className={NavbarStyles.Cicon} onClick={OnClick}><CloseLogo /></a>
        </div>
    )
}

export default Navbar;