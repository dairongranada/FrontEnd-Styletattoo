import { PageFormSe } from '../PageFormSe/PageFormSe'

import { useState } from 'react';
import { RegistroStep1 } from './RegistroStep1';
import { RegistroStep2 } from './RegistroStep2';
import './RegistroStyle.scss'
import './MediaQuerys.scss'


export const Registro = () => {

    const [steps, setSteps] = useState(1);
    const [userType, setUserType] = useState(2);

    return (
      
        <div>
            {
                (steps == 1)
                ? <RegistroStep1 setUserType={setUserType} step_change={setSteps}/>
                : <RegistroStep2 userType={userType} steps={steps} step_change={setSteps}/>
            }
            <PageFormSe />
        </div>
 
    )
}