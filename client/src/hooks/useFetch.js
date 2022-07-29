import { useState, useEffect } from "react";

const UseFetch = ( ) => {

  const [usuariodata, setUsuariodata] = useState("");




  useEffect(() => {

    //para ver los pilotos de un usuario
    let respuesta = { logId: JSON.parse(localStorage.getItem('user')).logId }
    //console.log(respuesta)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ respuesta }),
    };
    fetch("verPilotos", requestOptions)
      .then((res) => res.json())
      .then(res => { setUsuariodata(res.usuarioData) })
      //; setUsuariodata(res.usuarioData)
    }, [])

  return [usuariodata];
};

export default UseFetch;