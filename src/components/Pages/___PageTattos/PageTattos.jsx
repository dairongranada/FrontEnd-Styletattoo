import React from 'react'
import './PageTattos.scss'
import tatu from '../../../images/Tattos/pircings_dark.jpg'

export const PageTattos = () => {
  return (
    <div className='contPrimary'> 
      <div className='contBack'>
        <div className='contInfo' >
          <h3>Todo sobre Tatuajes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem qui molestiae voluptas corporis! Officiis dolor, iusto et deserunt sed vel eligendi perferendis voluptate quod natus debitis, minima ullam sapiente minus?
              Minima eos laudantium dolores dolorem in omnis quia odio, architecto dolor vero veniam sed. Totam, dignissimos? Blanditiis accusamus porro a iure omnis laudantium fugiat ipsum. Repellendus, sit ratione! Eveniet, vel.
              Expedita, quas ad quae commodi dolore ipsam voluptatum voluptate labore natus omnis unde laboriosam exercitationem nemo quo, reiciendis et pariatur qui repellat vitae neque magni quasi adipisci a sunt? Impedit?
              Magni veritatis consequuntur sed reprehenderit mollitia voluptatem, temporibus atque. Non laborum amet veritatis corrupti. Harum velit iusto quasi dolorum totam voluptatibus laboriosam magni. Fugit, mollitia sunt. Voluptatem accusamus nostrum temporibus!
            </p>
        </div>
        <div className='contImg'>
          <img src={tatu} alt="" />
        </div>
    
      </div>
    </div>
  )
}
