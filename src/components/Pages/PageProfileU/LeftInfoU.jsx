import { InfoProfileU } from './InfoProfileU'
import { UptInfoU } from './UptInfoU'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';
import { NavFooter } from '../../Layouts/NavigationFooter/NavFooter/NavFooter';


export const LeftInfoU = () => {



  return (
    <>           
    <NavigationBar/>
    <div className='BodyProfileUser'>
          <section className="seccion-perfil-usuario">
            <UptInfoU/>
            <InfoProfileU/>
        </section>
    </div>
    <NavFooter/>

  </>

  )
}
