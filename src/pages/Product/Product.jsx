import { useState, useEffect } from 'react'

import tokenService from '../../utils/tokenService';
import ProductDisplay from '../../components/DisplayFeed/DisplayFeed';
import { useParams} from 'react-router-dom'
import ProductBioDisplay from '../../components/ProductBioDisplay/ProductBioDisplay';
export default function product({loggedUser}){
//productname come from params app.js /:productName
//localhost,,,/perfume shoule be perfume
  const [product, setProduct] = useState({})
  const [reviewDetail, setReviewDetail] = useState([])
  const{productName} = useParams()
  console.log(productName)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("");
//EveryTime product name change, we want reload through useEffect
    useEffect(()=>{
        getProductInfo()
    },[productName])

    //get product info fetch API from express sever
    async function getProductInfo(){
        try{
            
            const response = await fetch(`/api/products/${productName}`,{
                method:'GET',

            })
            const data= await response.json();
            
            setProduct(data)
       
            setLoading(false)

            setError(' ')// set error blank once success fetch

            
        }catch(err){
            console.log(err.message)
            setError('no this product in database, check terminal')
            
        }
    }
    async function handleAddReview(reviewFromTheForm){ // productName comes from the productBIO component
      // where we call this function
      try {
        const response = await fetch(`/api/.products/${productName}/reviews`, {
          method: 'POST',
          headers: {
            // convention for sending jwts in a fetch request
            Authorization: "Bearer " + tokenService.getToken(),
            // We send the token, so the server knows who is making the
            // request
          },
          body: reviewFromTheForm
        })
  
        const data = await response.json();
        console.log(data, ' response from sever')
        setReviewDetail([data.reviewDetail, ...reviewDetail])
        
      } catch(err){
        console.log(err)
      }
    }
    async function removeReview(reviewId){ // productName comes from the productBIO component
      // where we call this function
      try {
        const response = await fetch(`/api/reviews/${reviewId}`, {
          method: 'DELETE',
          headers: {
            // convention for sending jwts in a fetch request
            Authorization: "Bearer " + tokenService.getToken(),
            // We send the token, so the server knows who is making the
            // request
          }
        })
  
        const data = await response.json();
        console.log(data, ' response from DELETE REVIEWS')
        getProductInfo(); // Refetch the posts, which updates the state, 
        // the post will now have the user in inside of the 
        // post.likes array
      } catch(err){
        console.log(err)
      }
    }





    
    return(
        <ProductBioDisplay product={product} handleAddReview={handleAddReview} removeReview = {removeReview} loggedUser ={loggedUser}/>
        
    )}
