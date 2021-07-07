
export const createMusic = (body, clear) => {
    axios.post(`${BASE_URL}/music`, body, {
        headers : {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        alert("Música criada com sucesso")
        clear()
    })
    .catch((err) => alert("Ocorreu um erro"))
};