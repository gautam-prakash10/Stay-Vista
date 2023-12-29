import React from 'react'
import "./DestinationPic.css"

function DestinationPic() {
  return (
    <>
    <h2 className='heading' style={{marginLeft:"150px",marginTop:"50px"}}>PICK A DESTINATION</h2>
    <div className="container" style={{width:"570px",height:"500px",display:"flex"}}>
             <div className="cards"  style={{height:"570px",marginTop:"20px",marginLeft:"-400px"}}>
            <img src="https://stay-vista.cdn.prismic.io/stay-vista/1e78cfa9-e642-4865-959e-cfebfe50dab9_Lonavala.svg" alt="" style={{width:"200px",height:"150px",
            }}/>
                <h1 className="img-txt" style={{margin:"10px",fontSize:"30px"}}>Lonavala</h1>   
            </div>
          </div>
          
            
    
      
    </>
  )
}

export default DestinationPic


