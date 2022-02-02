import axios from 'axios'


const url="http://localhost:8081/demo/fast"

// axios.method(url,object)


const traverse=async()=>{
    const tmp=await axios.get(`${url}/`)
    return tmp
}

const oneAtTime=async(param)=>{
    const tmp = await axios.get(`${url}/${param}`)
    return tmp
}


export { traverse, oneAtTime}

