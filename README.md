# Habit+ (Under development)
### Back-end repository

Aplicación web para mejorar los hábitos de los usuarios de Cáritas


## Sobre el proyecto

La app Habits+ es una herramienta informativa sobre los principales hábitos saludables con la que se pretende que se pueda consultar información contrastada sobre éstos para mejorar nuestro bienestar. Dormir y comer bien, hacer ejercicio físico y encontrarse bien psicológicamente, es esencial para nuestra salud.

## Base de datos y tests

![image (1)](https://user-images.githubusercontent.com/99019637/181199222-7da57588-40bf-44df-8f90-2b1fa5c83510.png)
![image](https://user-images.githubusercontent.com/99019637/181199231-e88687fb-2972-4f4d-985a-3278b4954ba8.png)


## Funcionalidades
1. Creación, vista, edición y deleción (CRUD) de usuarixs
2. Envio de un correo electrónico con las credenciales de autentificación al usuario
3. Obtención de un Jason Web Token (JWT) en loguearse usuarixs y administradorxs
4. Encriptación de contraseña 
5. Creación de endpoints para el CRUD de usuarios y secciones
6. CRUD de secciones 

## Instalación

1. Clona el repositorio con el siguiente comando: 

```
git clone https://github.com/Caritas-Habits/Back-End.git
```

2. Luego, inicia el back-end con `npm run dev`, este comando inciará el back-end en http://localhost:5050 .Si lo prefieres, puedes cambiar el puerto de conexión en el archivo `./src/index`

3. Si quieres ver su funcionamiento en el front, deberás clonar también ese repositorio.

```
git clone https://github.com/Caritas-Habits/Front-End.git
```

4. Para ver el proyecto, necesitaras ejecutar el siguiente comando para instalar las dependencias utilizadas y de esta forma poder tener el proyecto con todas sus funciones y vistas correctamente.

```
npm install
```

5. Finalmente, con el siguiente comando, iniciaras el front:

```
npm start
```
  


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

