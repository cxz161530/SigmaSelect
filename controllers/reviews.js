const Product = require('../models/product');

module.exports = {
    create,
    deleteReview
}

async function create(req, res){
    console.log(req.file, req.body, req.user)
 
    /* try {
        const post = await product.findById(req.params.id);
        post.likes.push({username: req.user.username, userId: req.user._id}); //mutating a document
        await post.save()// save it
        res.status(201).json({data: 'like added'})
    } catch(err){
       
        res.status(400).json({err})
    } */
    
}

async function deleteReview(req, res){
    console.log(req.file, req.body, req.user,'delete')
   /*  try {
    
        
        const post = await Post.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        post.likes.remove(req.params.id) // mutating a document
        // req.params.id is the like id 
        await post.save() // after you mutate a document you must save
        res.json({data: 'like removed'})
    } catch(err){
        res.status(400).json({err})
    } */
}