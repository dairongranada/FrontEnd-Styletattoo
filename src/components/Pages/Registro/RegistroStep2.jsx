import { MdOutlineCancel } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { RegisterClinica } from './Register_data_fprm/RegisterClinica';
import { RegisterUser } from './Register_data_fprm/RegisterUser';

export const RegistroStep2 = ( {step_change, userType} ) => {


    const handleChangeStepBack = () => {
        step_change(1)
    }


    return (
        <>
          
            <div className="register_container">
                <div className="registerDataAuto">
                    <div id='titulo_MdOutlineCancel'>
                        <h2 >Ingresa los datos</h2>
                        <Link to='/'>
                            <div id='MdOutlineCancel'><MdOutlineCancel/></div>
                        </Link>
                    </div>

                    {

                        ( userType === 3 )
                        ? <RegisterClinica change_step={handleChangeStepBack}/>
                        : <RegisterUser change_step={handleChangeStepBack}/>
                    }

                </div>
            </div>
        </>
    )
}
