import { FaCircle,FaTimes,FaEdit } from 'react-icons/fa';
function Icon({name}){

    if(name=="check"){
    return <FaCircle/>
    }
    else if(name=="cross"){
     return <FaTimes/>
    }
    else{
    return <FaEdit/>
    }
}

export default Icon;