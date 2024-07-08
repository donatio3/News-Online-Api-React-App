import ErrorMessage from '../components/errorMessage/ErrorMessage'
import Spinner from '../components/spiner/Spinner'

const setContent = (state, Component, message = <ErrorMessage/>) => {
    switch (state) {
        case 'waiting':
            return null
        case 'loading':
            return <Spinner/>
        case 'confirmed': 
            return Component;
        case 'error':
            return message
        default:
            return null;
    }
}

export default setContent