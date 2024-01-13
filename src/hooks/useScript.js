import { useEffect } from 'react';


const useScript = (url, isAsync) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.setAttribute('src', url);
        script.setAttribute('async', isAsync);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [url, isAsync]);
};

export default useScript;
