import axiosClient from "./axiosClient";

const statApi = {
    stat: axiosClient.get('/stat')
}

export default statApi