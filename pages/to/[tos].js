import { useRouter } from 'next/router'

export default function tos({ tos }) {
    
    if (typeof window !== "undefined") {
        window.location.assign(`https://${tos}`);
    }

    return null;
}

export async function getStaticProps(context) {
    const { tos } = context.params;

    return {
        props: {
            tos
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking"
    }
}