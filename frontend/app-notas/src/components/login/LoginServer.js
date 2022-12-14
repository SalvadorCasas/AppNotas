const API_URL = 'http://127.0.0.1:8000/user/login/';

export const loginUsuario = async (newRegistro) => {
    console.log(newRegistro);
    return await fetch(API_URL,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": String(newRegistro.username).trim(),
            "name": String(newRegistro.name).trim(),
            "last_name": String(newRegistro.last_name).trim(),
            "email": String(newRegistro.email).trim(),
            "password": String(newRegistro.password).trim()
        })
    });
};

export const conectUsuario = async (usuarioId) => {
    return await fetch(`${API_URL}${usuarioId}`);
};
