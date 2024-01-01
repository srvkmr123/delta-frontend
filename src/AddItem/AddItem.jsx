/* eslint-disable react/prop-types */

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ItemSchema } from '../validateItem';
import axios from 'axios'
import { useState } from 'react';

function AddItem({setIsItemAdded}) {

    const [isAlert,setIsAlert]=useState(false)
    
const handleSubmit=async(values, { setSubmitting,resetForm })=>{
   
   try{
    const res=await axios.post(`https://delta-backend.vercel.app/add-item`,values)
    console.log(res);
    setSubmitting(false)
    setIsAlert(true)
    resetForm()
    setIsItemAdded(prevVal=>!prevVal)
    setTimeout(()=>setIsAlert(false),2000)
   }
   catch(ex){
    console.log(ex);
   }
}
    
  return (
    <div className='card container'>
    {isAlert?<div className="item-alert alert alert-success fixed-top " role="alert">
  Item added successfully !!
</div>:null}
        <h2 className='text-center'>Add Item</h2>
      <Formik
            initialValues={{ title: '', description: '' }}
            validationSchema={ItemSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
               <div className="title form-group">
               <label htmlFor="title">Title</label>
               <Field type="text" className="form-control" name="title" id="title" />
                <ErrorMessage name="title" component="div" className='text-danger' />
               </div>
               <div className="description form-group">
               <label htmlFor="description">Description</label>
               <Field type="text" as="textarea" className="form-control" name="description" id="description"/>
                <ErrorMessage name="description" component="div" className='text-danger' />
               </div>
                <button type="submit" className='btn btn-primary' disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
              )}
              </Formik>
          <hr></hr>
    </div>
  )
}

export default AddItem