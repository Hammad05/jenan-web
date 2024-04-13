'use client';
import { useState, useEffect, PropsWithChildren, useRef } from 'react';
import { Player } from "@lottiefiles/react-lottie-player"
import { usePathname } from 'next/navigation';
import { cookies } from 'next/headers';

// Custom Suspense component
const CustomSuspense: React.FC<PropsWithChildren> = ({ children }) => {
    const [showSplash, setShowSplash] = useState(false);

    const bindEvents = () => {
        window.addEventListener("load", onLoad);

        document.addEventListener("readystatechange", readyStateChange);

        document.addEventListener("DOMContentLoaded", DOMContentLoaded);
    }

    const unbindEvents = () => {
        window.removeEventListener("load", onLoad);

        document.removeEventListener("readystatechange", readyStateChange);

        document.removeEventListener("DOMContentLoaded", DOMContentLoaded);

    }

    useEffect(() => {
        document.addEventListener("load", DOMContentLoaded);

        return () => {
            document.removeEventListener("load", DOMContentLoaded);
        };
    }, [bindEvents, unbindEvents]);

    const onLoad = () => {
        debugger
        console.log('onLoad');
    }

    const readyStateChange = () => {
        debugger;
        console.log(`readystate: ${document.readyState}\n`);
    }

    const DOMContentLoaded = () => {
        debugger
        console.log(`DOMContentLoaded\n`);
    }

    return showSplash ? <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black'><Player
        src={"/loader.json"}
        autoplay
        loop
    /></div> : <div>{children}</div>;
};

export default CustomSuspense;
