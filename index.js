Ici, vous insérez le code de la vm leopard a interpreter :

##################################
EXEMPLE / EXAMPLE :
import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "chemin/vers/la/scene";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  ExampleSprite: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Si vous mettez 60, le projet fonctionnera plus rapidement. (vous pouvez aussi mettre 144, mais attention la vitesse !)
});
export default project;

##################################
