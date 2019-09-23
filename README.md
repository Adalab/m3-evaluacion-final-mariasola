### Ejercicio de evaluación - Módulo 3
Antes de empezar, tenéis que crear un nuevo repositorio desde GitHub Classroom. Una vez creado, lo clonamos en nuestro ordenador y en la carpeta creada empezaremos a trabajar en el ejercicio.
El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.
Vamos de definir las distintas partes del ejercicio: 1. Listado de personajes
En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos a utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
foto nombre especie
Si este servicio no funcionase tenemos una url de backup: https://raw.githubusercontent.com/Adalab/rick-y- morty/master/data/rick-y-morty.json
Para esta primera parte del ejercicio es suficiente pintar la información sin maquetar.
### 2. Filtrado de personajes
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

### 3 Componentes del listado de personajes
El listado debe tener los siguientes componentes como mínimo:
Componente para los filtros
Componente para el listado
Componente para la tarjeta de cada personaje del listado Componente para el detalle de cada personaje
Como en el ejemplo:
### 4. Detalle de personajes
Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.
       NOTA: en principio no es necesario tener en cuenta si las letras están en mayúscula/minúscula para la búsqueda, pero si queréis añadir esta mejora pues genial.

### 5. BONUS: Mejoras visuales
Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:
mostrar la especie y si un personajes está muerto con un icono usar algún sistema de grid para pintar el listado de personajes que funcione bien el responsive en dispositivos pequeños
### 6. BONUS: URL compartible
Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
Recursos
Puedes descargar el logo desde este enlace.
Entrega
La entrega del ejercicio se realizará en el mismo repositorio que has creado al comienzo del ejercicio. Hemos pautado 12 horas de dedicación al ejercicio, por lo que el límite de entrega es
turno de mañana: próxima sesión a las 15:00h turno de tarde: próxima sesión a las 22:00h
Normas
Este ejercicio está pensado para que lo realices de forma individual en clase, pero podrás consultar tus dudas con la profesora y tus compañeras si lo consideras necesario. Aún facilitando la comunicación entre compañeras, durante la prueba está prohibido copiar código de otra persona o acceder a su portátil. Confiamos en tu responsabilidad. La evaluación es una buena oportunidad para conocer cómo estás progresando, saber qué temas debes reforzar durante las siguientes semanas y cuáles dominas. Te recomendamos que te sientas cómoda con el ejercicio que entregues y no envíes cosas copiadas que no entiendas. Si detectamos que has entregado código copiado de una compañera, no evaluaremos tu ejercicio y pasarás directamente a la re- evaluación del módulo. Tu objetivo no debería ser pasar la evaluación sino convertirte en programadora, y esto debes tenerlo claro en todo momento. Una vez entregado el ejercicio realizarás una revisión del mismo con la profesora (30 minutos), que te pedirá que expliques las decisiones tomadas para realizarlo y te propondrá realizar cambios in situ sobre tu solución. Al final, tendrás un feedback sobre aspectos a destacar y a mejorar en tu ejercicio, y sabrás qué objetivos de aprendizaje has superado de los listados a continuación.
Criterios de evaluación
Vamos a listar los criterios de evaluación de este ejercicio. Si no superas al menos el 80% de estos criterios o no
has superado algún criterio clave (marcados con *) te pediremos que realices una re-evaluación con el fin de que termines el curso mejor preparada y enfrentes tu primera experiencia profesional con más seguridad. En caso contrario, estás aprendiendo al ritmo que hemos pautado para poder afrontar los conocimientos del siguiente módulo.

### React básico

Crea componentes con sintaxis correcta*
Crea una estructura adecuada de componentes*
Usa las props para pasar datos a componentes hijos*
Sabe pintar listados de datos*
Sabe usar métodos funcionales de array (map, filter, etc.)*
Usa el estado para gestionar información de la interfaz*
El componente principal App.js maneja el estado de la aplicación
Usa eventos en React para atender a interacciones del usuario*
Usa métodos del ciclo de vida como componentDidMount para las peticiones al servidor Escribe un código sólido, sin errores en la consola
Usa propTypes para evitar errores de tipado
Tiene soltura a la hora de realizar cambios en el ejercicio presencial
React router
Crea rutas navegables dentro de una aplicación
Issues
Haber resuelto las issues de la evaluación intermedia
Otros criterios a tener en cuenta
Usar inglés para nombres de variables, funciones, clases, mensajes de commit, nombres de ficheros
El repositorio de GitHub debe tener README y un enlace a la web en GitHub Pages accesible desde la página principal
El perfil de GitHub debe tener datos de contacto, organización de Adalab visible, repositorios destacados
Wubba Lubba Dub Dub!!