import { useLayoutEffect, useState } from "react";

export function useWindowsSize()  {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    useLayoutEffect(() => {
        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', () => setSize({ width: window.innerWidth, height: window.innerHeight }));
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
}