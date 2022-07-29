import React, { useState } from "react";


const Home = (props) => {















  return (
    <div class="centrado">

      <div class="divtitulo">
        <h1 class="titulo">FORMULA 1 FANTASY</h1>
      </div>

      <div class="divinfoyactualizacion">
        <div  class="divinfo">
          <img src={`./img/infofoto.jpg`} class="infofoto">
          </img>

          <div class="infoapp">
            <p class="descripcion">
            Quieres vivir la Formula 1 como nunca antes? ¿Estas dispuesto a convertirte el rey de la competición? Con Formula1 Fantasy podrás vivir la experiencia de formar tu propia escudería, así como competir contra otros usuarios de todo el mundo.
            Compra, vende, apuesta. Cada Domingo podrás ganar mas puntos al finalizar la carrera y así poder comprar nuevos pilotos que te ayuden a alcanzar el puesto numero 1 y se el campeon de FORMULA 1 FANTASY!!!
            </p>
          </div>
        </div>


        <div class="actualizacion">
          <h4>
            Proxima actualizacion
          </h4>
          <p>CHAT: Podras comunicarte con otros usuarios</p>
          <p>PILOTOS LEGENDARIOS: Podras contar en tu equipo con los mejores pilotos de la historia</p>
          <p>BONIFICACIONES: Cuanto mas uses la aplicacion, mas puntos tendras</p>
          
        </div>
      </div>




    </div>
  );
};

export default Home;
