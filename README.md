En el ejercicio de evaluación se nos pide desarrollar un juego de cartas que consiste en encontrar las parejas de imágenes. 
Hay una serie de opciones para elegir el número de cartas con las que se quiere jugar y al seleccionar la deseada y pulsar en "Comenzar" se guarda la opción en local storage para que la pŕoxima vez que acceda a la páginda se inicie con la que ya tenía elegida. Al pulsar en cada carta, esta se dará la vuelta y al tener dos de ellas descubiertas se comparan sus valores y se quedan descubiertas si son pareja. Si no son pareja, pasado un segundo se vuelven a quedar boca abajo.
Para trabajar con ello hemos utilizado el Starter Kit de Adalab para poder utilizar Node y Gulp. 
Consiste en un archivo de HTML, uno de CSS y uno de JS. Por la extensión del código no ha sido necesario utilizar parciales, aunque no se han borrado los archivos que no eran necesarios para evitar problemas con el repositorio. 
El repositorio tiene la carpeta /docs incluida y la página se encuentra publicada en GitHub pages en el siguiente enlace: http://beta.adalab.es/modulo-2-evaluacion-final-bis-ana-arribas/

## Guía de inicio rápido
Necesitarás instalar [Node.js](https://nodejs.org/) y [Gulp](https://gulpjs.com) para trabajar con este Starter Kit, luego:
1. Descarga o clona el repositorio
2. Instala las dependencias locales con `npm install`
3. Arranca el kit con `gulp`

## Espera, ¿esto se hace siempre?
> ### Solo una vez al principio en cada ordenador que utilicemos:
- Instalamos node
- Instalamos el comando de gulp de forma global para poder usarlo desde cualquier carpeta usando `npm install --global gulp-cli`

> ### Cada vez que descarguemos o clonemos un repo:
- `npm install` para instalar los paquetes necesarios para convertir Sass a CSS, minizarlo, etc.

> ### Cada vez que estemos trabajando con nuestro código:
- Desde nuestra terminal, ejecutamos el comando `gulp` para que realice la tarea por defecto, que en el caso del `gulpfile.js` que tenemos en adalab-web-starter-kit estará pendiente de nuestros archivos Sass, html y JavaScript y los compilará, minificará y/o recargará el servidor cada vez que hagamos un cambio

## Tareas de gulp incluidas
### Inicio de un web server para desarrollo
```
npm start
```
o lo que en este proyecto es lo mismo:

```
gulp
```
Lanza un webserver con BrowserSync y varios watchers estarán pendientes de los archivos SCSS/JS/HTML, en la carpeta **public/**, para recargar el navegador cuando se necesite.

### Versión lista para subir a producción

Para generar los ficheros para producción ejecuta:

```
npm run docs
```
o lo que en este proyecto es lo mismo:
```
gulp docs
```
En la carpeta **docs/** se generarán los CSS y JS minimizados y sin sourcemaps listos para subir al repo. A continuación súbelos al repo y activa en GitHub Pages la opción **master/docs/**, para que GitHub Pages sirva la página desde la carpeta **docs/**.

---

Si quieres generar los ficheros listos para producción y además subirlos a GitHub directamente ejecuta el siguiente comando:
```
npm run push-docs
```
Este comando borra la carpeta **docs/**, la vuelve a generar, crea un commit con los nuevos ficheros y hace un `git push`, todo del tirón. ¿Cómo se te queda el cuerpo?. Si quieres saber cómo funciona échale un ojo al fichero `package.json`.

