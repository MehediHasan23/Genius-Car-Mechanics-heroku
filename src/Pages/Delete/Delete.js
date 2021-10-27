import React, { useEffect, useState } from 'react';

const Delete = () => {
  const [services, setServices] = useState()
  useEffect(()=>{
    fetch('https://fierce-beyond-94481.herokuapp.com/services/')
    .then(res=> res.json())
    .then(data => setServices(data))
  },[]);

  // delete service 
  const deleteId =(id)=>{
    const proceed = window.confirm('you want to sure to delete')
    if(proceed){
      const url = `https://fierce-beyond-94481.herokuapp.com/services/${id}`
    fetch(url,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data =>{
        if(data.deletedCount ===1){
          alert('delete successfully')
          const remaining = services.filter(service=> service._id !== id)
          setServices(remaining);
        }
      
    })
    }
    
  }
  return (
    <div>
      <h1>delete services: {services?.length}</h1>
      {
        services?.map(service=> <div key={service._id}>
          {service.Name} <br />
          <button onClick={()=>deleteId(service._id)}>X</button>
        </div>)
      }
    </div>
  );
};

export default Delete;