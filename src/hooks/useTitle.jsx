import { useEffect } from "react";

export default function useTitle(title) {
    useEffect(() => {
        document.title = title ? `${title} / Cinemate` : "Cinemate";
    }, [title]);
    return null;
}