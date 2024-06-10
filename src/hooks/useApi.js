import { useState } from "react"
import axios from "axios"

const useApi = () => {
    const [dataApi, setDataApi] = useState()
    function getApi(url){
        axios(url)
            .then(res => setDataApi(res.data))
            .catch(err => console.log(err))
    }

    return [
        getApi, 
        dataApi
    ]
}

export default useApi