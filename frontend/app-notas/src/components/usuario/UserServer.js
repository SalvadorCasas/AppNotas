// VAMOS A CONECTARNOS A UNA API
//para conectarse con la api del Backend
const API_URL = 'http://127.0.0.1:8000/user/user/' 

// return "listado de usuarios";
export const listUser = async () => {
    return await fetch(API_URL);
};

// CREAR UN USUARIO
export const registerUser = async (newUser) => {
    console.log(newUser)
    return await fetch(API_URL,{
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
        },
        mode: 'no-cors', //
        // headers: [],
        body: JSON.stringify({
            "username": String(newUser.nombreusuario).trim(),
            "name": String(newUser.nombre).trim(),
            "last_name":String(newUser.apellido).trim(),
            "password":String(newUser.contraseña).trim(),
            "email":String(newUser.mail).trim(),
        })
    });
};


// TRAE UN USUARIO
export const getUser = async (userId) => {
    return await fetch(`${API_URL}${userId}`);
};
