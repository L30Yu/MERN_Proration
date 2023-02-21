import axios from "axios";

const baseUrl = "http://localhost:5001"

const fetchProration = (setResult, values) =>{
    axios.post(baseUrl, values)
    .then(({data})=>{
        setResult(data)
    })
}


export {fetchProration }