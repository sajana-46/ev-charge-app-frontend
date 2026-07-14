import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navigationbar from './Navigationbar'






const Addvehicle = () => {
    const [input, changeInput] = useState(
      {
    bookingId: "",
    ownerName: "",
    batteryCapacity: "",
    email: "",
    connectorType: "",
    chargingDate: "",
    phone: "",
    vehicleRegistrationNumber: "",
    vehicleBrand: "",
    timeSlot: "",
    estimatedUnits: "",
    vehicleModel: "",
    chargingBayNumber: ""
}


    )

    
    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input);
        axios.post("http://localhost:3000/add-vehicle", input)
            .then((response) => {
                console.log(response.data);
                alert("Vehicle added successfully");
            })
            .catch((error) => {
                console.error("Error adding vehicle", error.res.status);
                console.error("Error adding vehicle", error.res.data);
            });


        
    };
    
  return (
    <div>
        <Navigationbar/>
        
        
        
        
       <div className="container">
    <div className="row">
        <div className="col-12">
            <h2 className="text-center">Add Vehicle</h2>

            <div className="row g-3">

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Booking ID</label>
        <input
            type="number"
            className="form-control"
            name="bookingId"
            value={input.bookingId}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Owner Name</label>
        <input
            type="text"
            className="form-control"
            name="ownerName"
            value={input.ownerName}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Battery Capacity (kWh)</label>
        <input
            type="number"
            className="form-control"
            name="batteryCapacity"
            value={input.batteryCapacity}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Email</label>
        <input
            type="email"
            className="form-control"
            name="email"
            value={input.email}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Connector Type</label>
        <input
            type="text"
            className="form-control"
            name="connectorType"
            value={input.connectorType}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Charging Date</label>
        <input
            type="date"
            className="form-control"
            name="chargingDate"
            value={input.chargingDate}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Phone</label>
        <input
            type="tel"
            className="form-control"
            name="phone"
            value={input.phone}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Vehicle Registration Number</label>
        <input
            type="text"
            className="form-control"
            name="vehicleRegistrationNumber"
            value={input.vehicleRegistrationNumber}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Vehicle Brand</label>
        <input
            type="text"
            className="form-control"
            name="vehicleBrand"
            value={input.vehicleBrand}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Time Slot</label>
        <input
            type="text"
            className="form-control"
            name="timeSlot"
            value={input.timeSlot}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Estimated Units (kWh)</label>
        <input
            type="number"
            className="form-control"
            name="estimatedUnits"
            value={input.estimatedUnits}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Vehicle Model</label>
        <input
            type="text"
            className="form-control"
            name="vehicleModel"
            value={input.vehicleModel}
            onChange={inputHandler}
            required
        />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
        <label className="form-label">Charging Bay Number</label>
        <input
            type="number"
            className="form-control"
            name="chargingBayNumber"
            value={input.chargingBayNumber}
            onChange={inputHandler}
            required
        />
    </div>

</div>

                

            
                        
                        
                    </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                </div>
            </div>
        

    
  )
}

export default Addvehicle