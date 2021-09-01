import extras from "../styles/extras.module.css";

export default function Footer() {
    return (
        <div className={`${extras.white} ${extras.center}`} id="footer">
            Website made with Next.js
        </div>
    )
}