// Pega aquí los códigos de Adsterra (Sites → tu dominio → Get code). Mientras estén vacíos, no se carga nada.
// Native Banner: copia el src de <script async data-cfasync="false" src="..."> y el id del <div id="container-...">.
export const ads = {
  adsterra: {
    native: [
      // { src: "https://pl00000000.profitablecpmratenetwork.com/xxxxxxxx/invoke.js", containerId: "container-xxxxxxxx" },
    ] as { src: string; containerId: string }[],
    socialBarSrc: "", // opcional: Social Bar src
  },
};
