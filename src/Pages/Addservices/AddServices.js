import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'



const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
   axios.post('https://fierce-beyond-94481.herokuapp.com/services', data)
   .then(res=>{
     console.log(res);
     if(res?.data?.insertedId){
       alert('uploaded successfully')
        reset()
     }
   })
  };
  return (
    <div className='data-form'>
      <h1>Add a service</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='name' {...register("Name", { required: true, maxLength: 20 })} />
      <textarea placeholder='description' {...register("description")} />
      <input type="number" {...register("price")} />
      <input placeholder='img' {...register("img")} />
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddServices;