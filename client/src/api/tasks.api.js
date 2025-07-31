import axios, { Axios } from 'axios'

export const getAllTasks = () => {
    return axios.get('http://localhost:8000/task/api/v1/task/')
}