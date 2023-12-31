import axios from "axios";

const baseUrl = 'http://localhost:3000/api/users';

const getUsuarios = async () => {
     const response = await axios.get(`${baseUrl}`);
     return response.data;
     
     
}

const getUsuarioById = (userId) => {
    return axios.get(`${baseUrl}/${userId}`);
    
}


const registro = (formValues) => {
    return axios.post(`${baseUrl}/register`,formValues);
};

const login = (formValues) => {
    return axios.post(`${baseUrl}/login`,formValues);
};

const update = (userId, formValues) => {
    return axios.put(`${baseUrl}/${userId}`, formValues);
};

const deleteUser = (userId) => {
    return axios.delete(`${baseUrl}/${userId}`);
}

const compra = (productId,token) => {
    return axios.put(`${baseUrl}/product/${productId}`,{
        headers: {
            'Authorization':`${token}`
        }
    });
}


const isLogged = () => {
    return localStorage.getItem('token') ? true : false;
}

export {
    registro,login,getUsuarios,update,getUsuarioById,deleteUser,compra,isLogged
}