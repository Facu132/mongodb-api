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
- PUT url/songs/:name -> Modifica una canción.

*Para un usuario especifico*
- POST url/users/songs/:user-> Agrego una canción a favoritos desde el body con la id
 con este formato:
["5f79278dc427e33460626eee"]
- DELETE url/:name -> Eliminar una canción favorita.
 ---------------------------------------------------------------------
 ### Cual es la arquitectura que se uso para el código?
 -MVC M:model
      V:views
      C:controller
