import axios from 'axios'

const url="http://localhost:8080/demo/fest"

const traverse=async()=>{
    const tmp=await axios.get(`${url}/`)
    alert(JSON.stringify(tmp.data)+"At axios")
    return tmp
}

const oneAtTime=async(param)=>{
    const tmp = await axios.get(`${url}/${param}`)
    return tmp
}

export {traverse, oneAtTime}

