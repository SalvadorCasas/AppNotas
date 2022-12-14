// VAMOS A CONECTARNOS A UNA API
//para conectarse con la api del Backend
const API_URL_1 = 'http://localhost:8000/user/user-create/';
const API_URL_2 = 'http://127.0.0.1:8000/user/user-detail/<int:pk>/';
const API_URL_3 = 'http://127.0.0.1:8000/user/user-list/';

// CREAR UN USUARIO
export const registerUser = async (newUser) => {
    return await fetch(API_URL_1,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": String(newUser.username).trim(),
            "name": String(newUser.name).trim(),
            "last_name":String(newUser.lastname).trim(),
            "password":String(newUser.password).trim(),
            "email":String(newUser.email).trim(),
        })
    })
};

// ELIMINA UN USUARIO
export const deleteUser = async (userId) => {
    return await fetch(`${API_URL_2}${userId}`, {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    },
    })
};

export const getUser = async (userId) => {
    return await fetch(`${API_URL_3}${userId}`);
};