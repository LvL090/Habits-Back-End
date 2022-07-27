# Habit+ (Under development)

Aplicación web para mejorar los hábitos de los usuarios de Cáritas


## Sobre el proyecto


Habit+ nace de la necesidad de dar a conocer y enriquecer hábitos saludables dentro de la comunidad de Cáritas. 

Distribuidas en cuatro categorias, la web permite a lxs usuarixs obtener mejor información sobre hábitos de sueño, deportivos, nutricionales y salud mental.  A su vez, la web permite el envio de consultas a lxs administadorxs para aclarar cualquier duda que surga sobre el seguimiento de estos hábitos. 

## La web en uso

<img width="1487" alt="Captura de Pantalla 2022-07-25 a las 12 45 00" src="https://user-images.githubusercontent.com/99019637/180759527-1d0e5c26-2143-4c66-82c3-987ef12506be.png">

<img width="1487" alt="Captura de Pantalla 2022-07-25 a las 12 50 53" src="https://user-images.githubusercontent.com/99019637/180760446-47139f9b-f744-4b10-918f-453b28e9c2d2.png">
<img width="1587" alt="Captura de Pantalla 2022-07-25 a las 12 19 06" src="https://user-images.githubusercontent.com/99019637/180756093-e7383fb9-2f48-4b77-b62e-a7059c0f9a6e.png">
<img width="2101" alt="Captura de Pantalla 2022-07-27 a las 9 10 13" src="https://user-images.githubusercontent.com/99019637/181184252-8aa542a2-3034-41d2-acbc-661adc834cf7.png">


## Funcionalidades
1. Creación, vista, edición y deleción (CRUD) de usuarixs
2. Envio de un correo electrónico con las credenciales de autentificación al usuario
3. Obtención de un Jason Web Token (JWT) en loguearse usuarixs y administradorxs
4. Encriptación de contraseña 
5. Creación de endpoints para el CRUD de usuarios y secciones
6. CRUD de secciones 

## Instalación

1. Clona el repositorio con el siguiente comando: 

        `git clone https://github.com/Caritas-Habits/Back-End.git`

2. Luego, inicia el back-end con `npm run dev`, este comando inciará el back-end en http://localhost:5050 .Si lo prefieres, puedes cambiar el puerto de conexión en el archivo `./src/index`

3. Si quieres ver su funcionamiento en el front, deberás clonar también ese repositorio.
        `git clone https://github.com/Caritas-Habits/Front-End.git`

4. Para ver el proyecto, necesitaras ejecutar el siguiente comando para instalar las dependencias utilizadas y de esta forma poder tener el proyecto con todas sus funciones y vistas correctamente.

        `npm install`

5.Finalmente, con el siguiente comando, iniciaras el front:

        `npm start`
    


## Stack 
Para la construcción y desarrollo del Back-End se utilizó el stack:
- MongoDB
- NodeJs
- Express
- Jest
- Babel
- Mongoose
- Cors
- Morgan
- Jsonwebtoken
- Nodemon
- Supertest
- Helmet


##  LA APP EN UN FUTURO (v 2.0)
- Traducción a varios idiomas
- Poder añadir admins desde la plataforma
- Implementación de un chatbot
- Lista de usuarios, para que admin pueda consultar, editar, eliminar y registrar
- Estadisticas de usuarios
- Política de privacidad
- Admin puede realizar el CRUD de las secciones desde el Front
- Cuestionarios para valorar tus hábitos

##  AGRADECIMIENTOS 

A Caritas CDSF por confiar en nosotros para crear la web de este proyecto, en especial a Leila por haber hecho que sea ameno, claro y por contagiarnos aún más la ilusión por este proyecto. A Factoría F5 por ofrecernos este proyecto pedagógico tan interesante. 


## Equipo
- [Ales Navarro](https://github.com/aleswebgit "Ales")  ( [ Linkedin here ](https://www.linkedin.com/in/ales-dev/))
- [Alex Vidal](https://github.com/ginkgob "Álex ")  ( [ Linkedin here ](https://www.linkedin.com/in/alexvidalromera/))
- [Damaris Teoc](https://github.com/DamarisTeoc "Damaris")  ( [ Linkedin here ](https://www.linkedin.com/in/damaris-teoc-604a4223b/))
- [Daniel Calvo](https://github.com/LvL090 "Daniel calvo")  ( [ Linkedin here ](https://www.linkedin.com/in/daniel-calvo-andreu-18a0241b8/))
- [Jessica Mejia](https://github.com/itsberriver "Jessica") ( [ Linkedin here ](https://www.linkedin.com/in/jessicaberriver/))

