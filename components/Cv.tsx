import React from 'react'

const Cv = () => {
    return (
        <div className='w-full xs:w-96 xs:h-96 rounded-full' style={{
            backgroundImage: `url('/fondoCV.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            }}>
            <h1 id="proyectos" className="fuenteTitulo text-5xl text-center my-14">Descargar <br />CV</h1>

        </div>
    )
}

export default Cv