import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Read from "./Read";
import { oneAtTime,traverse } from "./API";

const List=()=>{
    const [rview,setRview]=useState(false)
    
    const [all,setAll]=useState([])
    const [read,setRead]=useState([])

    useEffect(()=>{
        iterate()
    },[])

   const iterate=async()=>{
       const t=await traverse()
      setRead(t.data)
       setAll(t.data)
       alert(JSON.stringify(t.data))
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

    const reading=async(one)=>{
        const hey=await oneAtTime(one)
        setObj(hey.data)
    } 

    return(
         <>

           {(rview)?
            <>
                <Read tollgate={obj}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setRview(false)}>
                    Back
                </button>
                </>
            :
            <>
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
                                    <th>Recently Passed Transactions</th>
                                    {/*<th>Actions</th>*/}
                                </tr>
                            </thead>
                            <tbody>
                                 {all.map((data,index)=>(
                                    <tr>
                                        <td onClick={
                                            ()=>{
                                                setRview(true)
                                                reading(data.vehicleNumber)
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
export default List