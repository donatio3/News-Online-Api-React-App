
import {useState, useCallback} from 'react'


const SubmitResponse = () => {
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(false)
    
    const request = async (formData) => {
            setLoading(true)
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error('eror', data)
            }
            console.log(data, 'response')
            return data
    
    }
    return {request, setLoading, setError, loading, error}
}

export default SubmitResponse
