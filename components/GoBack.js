import { useRouter } from 'next/router'

export default function GoBack() {
    const router = useRouter();

    if (router.pathname === "/") return (<></>)

    return <span onClick={() => router.back()} className="footer" style={{ color: "#35acf1", fontFamily: "system-ui", fontWeight: "bold", }}>
        ⇐ Back
    </span >
}