import {useState} from 'react'
import React from 'react'
import { FormField, Button,  Form , Segment } from 'semantic-ui-react'

export default function AddReviewForm({handleAddReview}){
    const [state, setState]= useState({
      userName: '',
      userId: '',
      reviewDetail: '',
    })
   

    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }

    function handleSubmit(e){
      e.preventDefault();
      const formData = new FormData()
      formData.append('productName', state.productName)
      formData.append('category', state.category)
      formData.append('oldPrice', state.oldPrice)
      formData.append('newPrice', state.newPrice)
      formData.append('caption', state.caption)
      formData.append('photo',photo)
      console.log
      handleAddProduct(formData)

    }

    return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <label>Product Name</label>
        <input placeholder='Product Name' name='productName'value={state.productName} onChange={handleChange}  />
      </FormField>
      <FormField>
        <label>Category</label>
        <input placeholder='Category' name='category'value={state.category} onChange={handleChange} />
      </FormField>
      <FormField>
        <label>Old Price</label>
        <input placeholder='Old Price' name='oldPrice'value={state.oldPrice} onChange={handleChange} />
      </FormField>
      <FormField>
        <label>New Price</label>
        <input placeholder='New Price' name='newPrice'value={state.newPrice} onChange={handleChange} />
      </FormField>
      <FormField>
        <label>Photo</label>
        <input type='file' onChange={handleFileInput} />
      </FormField>
      <FormField>
        <label>Caption</label>
        <input placeholder='caption' name = 'caption' value={state.caption} onChange={handleChange} />
      </FormField>
      
      <Button type='submit'>Submit</Button>
    </Form>
    )
}

