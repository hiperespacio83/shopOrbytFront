import axios from "axios";

// const baseUrl = 'https://0bdb-79-147-186-49.ngrok-free.app/api/products';
const baseUrl = 'http://localhost:3000/api/products';



//Recupera todos los productos del back a traves de una promesa dentro de su propiedad data

/**
 * 
 * @returns {Promise<AxiosResponse>}
 */

const getAll = () => {
    return axios.get(baseUrl);
}

const getById = (productoId) => {
    return axios.get(`${baseUrl}/${productoId}`);
}

const create = (formValues) => {
    return axios.post(baseUrl,formValues);
}

const update = (productoId, formValues) => {
    return axios.put(`${baseUrl}/${productoId}`, formValues);

}

const deleteById = (productoId) => {
    return axios.delete(`${baseUrl}/${productoId}`);
}

export {
    getAll,getById,create,update,deleteById
}