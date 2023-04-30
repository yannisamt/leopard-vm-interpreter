# leopard-vm-interpreter
exemple de la vm leopard.js

       <!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="index.css"
    />
  </head>
  <body>
    <button id="booter">Boot</button>
    <div id="inv"></div>

    <script type="module">
      import project from "./index.js";

      project.attach("#inv");

      document.querySelector("#booter").addEventListener("click", () => {
        project.greenFlag();
      });
      project.greenFlag();
    </script>
  </body>
</html>

Fonctionne avec d'autres codes utilisant cette biliothèque.
-https://github.com/yannisamt/je-dessine-et-je-note
