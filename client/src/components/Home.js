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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>


        <div class="actualizacion">
          <h4>
            Proximamente
          </h4>
          <p>CHAT: Los usuarios van a tener la posibilidad de manteenre conversaciones</p>
          <p>Cartas Especiales: Multiplica los puntos de uno de tus pilotos</p>
          <p>Presupuesto: Los usuarios fieles van a conseguir un premio diariamente</p>
        </div>
      </div>




    </div>
  );
};

export default Home;
