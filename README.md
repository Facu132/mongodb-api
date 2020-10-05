# mongodb-api

 
 Repositorio de api .

API  mongoDB, usando *Express*, *MongoAtlas*, *Mongoose*.


## ¿Como usar la API?

 ---------------------------------------------------------------------
**CONTRATO**

*general*

##### Coleccion Usuarios
- GET url/users -> Devuelve la lista de usuarios.
- POST url/users -> Agrega una canción.
- DELETE url/users -> Elimina la cancion desde el body

      {
        "_id": "5f79fc2e5270524c64aa7e40"
        }

- PUT url/users/:name -> Modifica la cancion que buscas, la modificación se hace desde el body.

     {
        "favoriteSongs": [],
        "name": "modificar nombre",
        "lastName": "modificar apellido",
        "mail": "modificar email",
        "age": "modificar edad"
    }


##### Coleccion Canciones
- GET url/songs -> Devuelve toda las canciones, sino hay, devuelve un error.
- GET url/songs/:name -> Devuelve la cancioón que buscaste.
- POST url/songs-> Agrego una canción a la base de datos con song en el body con formato JSON.
- DELETE url/songs/:name  -> eliminar una cancion.
- PUT url/songs/:name -> modifica una cancion.

*para un usuario especifico*
- POST url/users/songs/:user-> agrego una cancion a favorito desde el body con la id
 con este formato:
["5f79278dc427e33460626eee"]
- DELETE url/:name -> eliminar una cancion favorita.
 ---------------------------------------------------------------------
 ### Cual es la arquitectura que se uso para el codigo?
 -MVC M:model
      V:views
      C:controller
Cada carpeta tienen un *Readme.md* explicando que cosa va en cada uno, esto es para una mejor comprension del codigo.
