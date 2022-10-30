import { InfoProfileU } from './InfoProfileU'
import { UptInfoU } from './UptInfoU'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';


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
  </>

  )
}
