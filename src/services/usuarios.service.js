import axios from "axios";

const baseUrl = 'http://localhost:3000/api/users';

const getUsuarios = async () => {
     const response = await axios.get(`${baseUrl}`);
     return response.data;
}


const registro = (formValues) => {
    return axios.post(`${baseUrl}/register`,formValues);
};

const login = (formValues) => {
    return axios.post(`${baseUrl}/login`,formValues);
};

export {
    registro,login,getUsuarios
}