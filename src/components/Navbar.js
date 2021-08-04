import LinkLogo from "./LinkLogo";
import HamburgerLogo from "./HamburgerLogo";

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
        <div className="navbar" id="navbar">
            <a href="#" className="links bold active">
                Megatank58
            </a>
            <a href="https://discord.gg/fRVtnW8kY8" className="white bold">Discord<LinkLogo /></a>
            <a href="https://github.com/Megatank58" className="white bold">GitHub<LinkLogo /></a>
            <a href="https://github.com/CryptonDev/Crypton" className="white bold">Crypton<LinkLogo /></a>
            <a className="icon" onClick={OnClick}><HamburgerLogo /></a>
        </div>
    )
}

export default Navbar;