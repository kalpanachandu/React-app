import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Read=(kalpana)=>{
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 card p-3 shadow bg-dark">
                        <h1 className="card-title text-center text-primary">{kalpana.tollgate.vehicleNumber}</h1>
                        <div className="card-body">
                            <h3 className="card-text text-secondary text-center">{kalpana.tollgate.ownerName}</h3>
                            <h2 className="card-text text-center text-danger"> {kalpana.tollgate.vendor} </h2>
                            <p className="card-text text-success float-start">{kalpana.tollgate.id}</p>
                            <p className="card-text text-warning float-end">{kalpana.tollgate.balance}</p>
                            <p className="card-text text-warning float-end">{kalpana.tollgate.transactions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Read;
