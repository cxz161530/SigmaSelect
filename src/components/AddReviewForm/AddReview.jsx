
import React, {useState } from 'react'
import { FormField, Button,  Form , Segment } from 'semantic-ui-react'
import {useLocation} from 'react-router-dom'

export default function AddReviewForm({handleAddReview, loggedUser}){
    const [state, setState]= useState({
      userName: '',
      userId: '',
      reviewDetail: '',
    })
   

    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      });
    }

    function handleSubmit(e){
      e.preventDefault();
      const formData = new FormData()
      formData.append('reviewDetail', state.reviewDetail)
      formData.append('userName', {loggedUser})
      console.log(formData, 'from create review page')
     
      handleAddReview(formData)

    }

    return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <label>Review Detail</label>
        <input 
        placeholder='Give your Own Review' 
        name='reviewDetail'
        value={state.reviewDetail} 
        onChange={handleChange}  />
      </FormField>
     
      
      <Button type='submit'>Submit</Button>
    </Form>
    )
}

