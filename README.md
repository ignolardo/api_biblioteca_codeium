## Usage
Para utilizar la nueva actualización de usarios se debe utilizar la ruta `/api/usuarios/`

La API se conecta a red local de MongoDB en el puerto `27017` utilizando una base de datos `usuarios`

## Get All Users
GET `/api/usuarios/`

## Get User By ID
GET `/api/usuarios/[id]/`

Cambia [id] por el ID del usario a buscar

## Create New User
POST `/api/usuarios/`

El cuerpo de la petición debe contener como parametros nombre y apellido.
```json
{
    "nombre": "john",
    "apellido": "doe"
}
```

## Update User
PUT `/api/usuarios/[id]/`

Cambia [id] por el ID del usario a editar

El cuerpo de la petición debe contener como parametros nombre y apellido.
```json
{
    "nombre": "john",
    "apellido": "doe"
}
```

## Delete User
DELETE `/api/usuarios/[id]/`

Cambia [id] por el ID del usario a eliminar