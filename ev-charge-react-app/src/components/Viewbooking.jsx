import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import{useEffect} from 'react'
import Navigationbar from './Navigationbar'







const Viewbooking = () => {
    const[data,changeData]=useState([])


    const fetchData = () =>{
     axios.post("http://localhost:3000/view-booking").then(
        (res)=>{
            changeData(res.data)

        }
    ).catch()   


    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div>
        <Navigationbar/>
       
        
        
        
        
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All</h2>

        <table className="table table-striped">
          <thead>
            <tr>
             <th>Booking ID</th>
<th>Owner Name</th>
<th>Battery Capacity</th>
<th>Email</th>
<th>Connector Type</th>
<th>Charging Date</th>
<th>Phone</th>
<th>Vehicle Registration Number</th>
<th>Vehicle Brand</th>
<th>Time Slot</th>
<th>Estimated Units</th>
<th>Vehicle Model</th>
<th>Charging Bay Number</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.bookingId}</td>
<td>{value.ownerName}</td>
<td>{value.batteryCapacity}</td>
<td>{value.email}</td>
<td>{value.connectorType}</td>
<td>{value.chargingDate}</td>
<td>{value.phone}</td>
<td>{value.vehicleRegistrationNumber}</td>
<td>{value.vehicleBrand}</td>
<td>{value.timeSlot}</td>
<td>{value.estimatedUnits}</td>
<td>{value.vehicleModel}</td>
<td>{value.chargingBayNumber}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>

        


    </div>
  )
}

export default Viewbooking