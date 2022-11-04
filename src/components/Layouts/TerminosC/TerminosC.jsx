import React from 'react'
import'../../Layouts/TerminosC/TerminosC.scss'

export const TerminosC = () => {
  return (
    <div className='cont1'>
      <div className='contInfo'>
        <h3 className='titleTC'>TERMINOS Y CONDICIONES</h3>
        <p>Style Tattoo gestiona este sitio web. En todo el sitio, los términos "nosotros", "nos" y "nuestro" se refieren en lo
          sucesivo a Style Tattoo. Style Tattoo ofrece esta página web, incluida toda la información, las herramientas y los 
          servicios que se ponen en este sitio a disposición suya siempre y cuando acepte la totalidad de los 
          términos, condiciones, políticas y avisos contemplados aquí.</p>
        <p>Al visitar nuestro sitio usted interactúa con nuestro "Servicio" y reconoce los términos, condiciones y las políticas que se mencionan aquí y/o disponibles por medio de 
          hipervínculo. Estos Términos del servicio se aplican a todos los usuarios del sitio, incluyendo de manera 
          enunciativa mas no limitativa los usuarios que son navegadores, proveedores, clientes, comerciantes y/o que 
          aporten contenido al sitio web.
          Lea estos Términos del servicio detenidamente antes de acceder o utilizar nuestra página web. Al acceder o utilizar
           cualquier parte del sitio, usted acepta estos Términos del servicio. Si no acepta la totalidad de los términos y 
           condiciones de este acuerdo, no podrá acceder al sitio web ni utilizar ningún servicio.</p>
        <div className='contSecciones'>
          <h2>SECCIÓN 1: TERMINOS DEL SITIO :</h2>
            <p>Al aceptar los presentes Términos del servicio, usted declara que tiene la mayoría de edad en su estado
               o provincia de residencia y que nos ha dado su consentimiento para permitir que cualquiera de las personas
               menores que dependen de usted utilice este sitio.No puede utilizar nuestros productos para ningún fin ilegal 
               o no autorizado. El incumplimiento o violación de cualquiera de los Términos dará como resultado la 
               rescisión inmediata de sus Servicios.</p>
          <h2>SECCIÓN 2: EXACTITUD, TOTALIDAD Y CRONOLOGÍA DE LA INFORMACIÓN</h2>
            <p>No nos responsabilizamos si la información disponible en este sitio no es precisa, completa o actualizada. 
              El material presentado en este sitio se proporciona solo para información general y no se debe confiar en
              él ni utilizarlo como la única base para tomar decisiones sin consultar fuentes de información principales,
              más precisas, más completas o más recientes. Al confiar en cualquier material de este sitio lo hace por su
              cuenta y riesgo.Este sitio puede contener cierta información histórica.Nos reservamos el derecho 
              de modificar el contenido de este sitio en cualquier momento, pero no tenemos la obligación de actualizar
              ninguna información en nuestro sitio.
            </p>
          <h2>SECCIÓN 3: INFORMACIÓN PERSONAL</h2>
            <p>El envío de la información personal que haga a través de la tienda se rige por nuestra Política de privacidad.</p>
          <h2>SECCION 4: INFORMACIÓN DE CONTACTO</h2>
            <p>Las preguntas sobre los Términos del servicio se deben enviar a OficialStyleTattoo@gmail.com.</p>

            <a  className='BntAceptarterminos' href="/Registro"><button type='sumbit' className='buttons_global_StyleTatto'>Aceptar Terminos</button></a>
                
          


        </div>
      </div>
    </div>
  )
}
