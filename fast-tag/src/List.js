import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Create from "./Create";
import info, { getting } from './DataAccess'
import Read from "./Read";
//import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
// import Edit from "./Update";
import Button from '@mui/material/Button';
import { oneAtTime, traverse } from "./API";



const List=()=>{
    //const [cview,setCview]=useState(false)
    const [rview,setRview]=useState(false)
    const [setEview]=useState(false)
    const [setCompany]=useState("")

    const [all,setAll]=useState([])

    useEffect(()=>{
        iterate()
    },[])

    const iterate=async()=>{
        const t=await traverse()
        setAll(t.data)
    }

    const [obj,setObj]=useState(
        {
            "vehicleNumber":"",
            "ownerName":"",
            "vendor":"",
            "id":0,
            "balance":0.0,
            "transactions":""
        }
    )

    {/*const callCreate=()=>{
        setCview(true)
    }*/}

    const reading=async(one)=>{
        const hey=await oneAtTime(one)
        setObj(hey.data)
    }

    {/*const abort=async(par)=>{
        const yet=await terminate(par)
        alert(yet.data)
        window.location.assign("http://localhost:3000")
    }*/}
    return(
        <>
           {/* {(cview)?
            <>
                <Create/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setCview(false)}>
                    Back
                </button>
            </>
           :*/}
            {(rview)?
            <>
                <Read corp={obj}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setRview(false)}>
                    Back
                </button>
            </>
            :
            
            <>
            {/*<button className="btn btn-outline-success" onClick={callCreate}>
                Create
            </button>*/}
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow text-light bg-info">
                        <thead>
                            <tr>
                                <th>Number of the Vehicle</th>
                                <th>Owner Name</th>
                                <th>Vendor</th>
                                <th>FastTag Id</th>
                                <th>Balance</th>
                                <th>Transactions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((data,index)=>(
                                <tr>
                                    <td onClick={
                                        ()=>{
                                            setRview(true)
                                            reading(data.vehicleNumber)
                                        }}>
                                        {data.vehicleNumber}
                                    </td>
                                    <td onClick={
                                        ()=>{
                                            setRview(true)
                                            const tmp=getting(data.vehicleNumber)
                                            setObj(tmp)

                                        }}>
                                            {data.vehicleNumber}
                                        </td>
                                    <td>{data.ownerName}</td> 
                                    
                                    <td>{data.vendor}</td>
                                    <td>{data.id}</td>
                                    <td>{data.balance}</td> 
                                    <td>
                                        {data.transactions.map((ele)=>(
                                            <p>{ele}</p>
                                        ))}
                                    </td>
                                    <td>
                                       {/*} <Button color="error" className="btn btn-outline-danger" onClick={
                                            ()=>{
                                                abort(data.vehicleNumber)
                                            }
                                        }>
                                            <RemoveCircleIcon/>
                                    </Button>}*/}
                                    </td>
                                    <td>
                                        <Button color="warning" className="btn btn-outline-warning" onClick={
                                            ()=>{
                                                setEview(true)
                                                setCompany(data.vehicleNumber)
                                            }
                                        }>
                                            <EditIcon/>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            }
        </>
    );
}

export default List;
