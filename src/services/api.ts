import axios from "axios";

function getAllUsers(page: number) {
    return axios.get(`https://api.github.com/repos/git/git/contributors?page=${page}`)
        .then(response => {
            return response.data;
        })
        .catch(error => alert(error));
}

function getUserByName(name: string) {
    return axios.get(`https://api.github.com/users/${name}`)
        .then(response => {
            return response;
        })
        .catch(error => alert(error));
}

function getReposByContributor(name: string) {
    return axios.get(`https://api.github.com/users/${name}/repos`)
        .then(response => {
            return response;
        })
        .catch(error => alert(error));
}

export { getAllUsers, getUserByName, getReposByContributor }