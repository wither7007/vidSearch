import axios from axios
const login="https://reqres.in/api/login"

axios.get(login)
.then(res=>console.log(res.res.data))