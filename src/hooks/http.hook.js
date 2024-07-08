import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [process, setProcess] = useState('waiting')
    const [error, setError] = useState(null)
        
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setProcess('loading');

        try {  // вместо then и catch используем try/catch
            const response = await fetch(url, {method, body});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json()

            setLoading(false)
            return data

        } catch(e) {
            setProcess('error');
            throw e;
        }
    }, []);

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);
    
    return {loading, process, setProcess, request, error, clearError}
}

