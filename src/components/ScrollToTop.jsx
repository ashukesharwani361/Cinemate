import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // This will scroll to the top of the page whenever the pathname changes.
    }, [pathname])
    
    return null;
}