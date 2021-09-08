import { ClipLoader } from "react-spinners";
import './LoadingSpinner.scss'

const LoadingSpinner = () => {
    return(
        <div className='spinner-container'>
            <ClipLoader color='gray' size='25px'/>
        </div>
    )
}

export default LoadingSpinner