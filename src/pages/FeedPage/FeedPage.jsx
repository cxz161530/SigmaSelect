import {useState} from 'react'

import AddProductForm from "../../components/AddProductForm/AddProductForm";
export default function FeedPage(){
    const [products, setProducts] = useState([])
    async function handleAddProduct(productFromTheForm){
        console.log(productFromTheForm)
    }
        
    return(
        
            <AddProductForm handleAddProduct={handleAddProduct}/>
        
    )
}