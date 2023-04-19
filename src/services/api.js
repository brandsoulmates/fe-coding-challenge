import axios from "axios"

const ApiService = {
  getUsers(params) {
    return new Promise((resolve, reject) => {
      axios.get('https://api.github.com/users', {
        params
      })
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },

  getUserDetails(username) {
    return new Promise((resolve, reject) => {
      axios.get(`https://api.github.com/users/${username}`)
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  }
}

export default ApiService
