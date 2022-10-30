import { InfoProfileT } from './InfoProfileT'
import { UptInfoT } from './UptInfoT'
import { NavigationBar } from '../../Layouts/NavigationBar/NavigationBar';



export const LeftInfoT = () => {



  return (
  <>           
    <NavigationBar/>
    <div className='BodyProfileUser'>
          <section className="seccion-perfil-usuario">
            <UptInfoT/>
            <InfoProfileT/>
        </section>
    </div>
</>

  )
}
