// VAMOS A CONECTARNOS A UNA API
//para conectarse con la api del Backend
const API_URL_1 = 'http://127.0.0.1:8000/user/user-create/';
const API_URL_2 = 'http://127.0.0.1:8000/user/user-detail/<int:pk>/';


// CREAR UN USUARIO
export const registerUser = async (newUser) => {
    return await fetch(API_URL_1,{
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

// ELIMINA UN USUARIO
export const deleteUser = async (userId) => {
    return await fetch(`${API_URL_2}${userId}`, {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    },
    mode: 'no-cors',
    })
};
