import axios from "axios";

function getAllUsers(page: number) {
    axios.get(`https://api.github.com/repos/git/git/contributors?page=${page}`)
        .then(response => {
            return response;
        })
        .catch(error => alert(error));
}

function getUserByName(name: string) {
    axios.get(`https://api.github.com/users/${name}`)
        .then(response => {
            return response;
        })
        .catch(error => alert(error));
}

function getReposByContributor(name: string) {
    axios.get(`https://api.github.com/users/${name}/repos`)
        .then(response => {
            return response;
        })
        .catch(error => alert(error));
}

export { getAllUsers, getUserByName, getReposByContributor }