import React from 'react'
import '../LayoutsChangeData/LayoutsChangeData.css'


export const LayoutsChangeData = () => {
    return (
        <main className='main'>
            <form>
                <h1 >Cambio De Informacion</h1>
                <div className='contentData'>
                    <div>
                        <p><strong>Foto De Perfil:</strong></p>
                    </div>
                    <div>
                        <p><strong>Nombres:</strong></p>
                        <div className='contentsData'>
                            <p><strong>primer nombre:</strong></p>
                            <div className='contentInfo'>
                                <input type="text" />
                                <hr />
                            </div>
                            <p><strong>segundo nombre:</strong></p>
                            <div className='contentInfo'>
                                <input type="text" />
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p><strong>Apellidos:</strong></p>
                        <div className='contentsData'>
                            <p><strong>primer apellido:</strong></p>
                            <div className='contentInfo'>
                                <input type="text" />
                                <hr />
                            </div>
                            <p><strong>segundo apellido:</strong></p>
                            <div className='contentInfo'>
                                <input type="text" />
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className='contentDataLine'>
                        <p><strong>Fecha De Nacimiento:</strong></p>
                        <div>
                            <input type="date" />
                            <hr />
                        </div>
                    </div>
                    <div className='contentDataLine'>
                        <p><strong>Correo Electronico:</strong></p>
                        <div>
                            <input type="email" />
                            <hr />
                        </div>
                    </div>
                    <div className='contentDataLine'>
                        <p><strong>Telefono:</strong></p>
                        <div>
                            <input type="text" />
                            <hr />
                        </div>
                    </div>
                    <div className='contentDataLine'>
                        <p id='Genero'><strong>Genero:</strong></p>
                        <div>
                            <select name="Genero" id='genero'>
                                <option value="" >seleccione una opcion</option>
                                <option value="Masculino" >Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">otro</option>
                            </select>
                            <hr />
                        </div>
                    </div>
                </div>
                <button className='buttonData'>enviar</button>
            </form>
        </main>
    )
}
