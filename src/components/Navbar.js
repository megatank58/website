import LinkLogo from "./LinkLogo";
import CloseLogo from "./CloseLogo";
import HamburgerLogo from "./HamburgerLogo";

function OnClick() {
    let x = document.getElementById("navbar");
    let icon = document.getElementById("iconBar");

    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <a href="/" className="links bold active">
                Megatank58
            </a>
            <a href="https://discord.gg/fRVtnW8kY8" className="white bold">Discord<LinkLogo /></a>
            <a href="https://github.com/Megatank58" className="white bold">GitHub<LinkLogo /></a>
            <a href="https://github.com/CryptonDev/Crypton" className="white bold">Crypton<LinkLogo /></a>
            <a className="H-icon" onClick={OnClick}><HamburgerLogo /></a>
            <a className="C-icon" onClick={OnClick}><CloseLogo /></a>
        </div>
    )
}

export default Navbar;