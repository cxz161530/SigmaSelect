const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  username: String,
  // One User has many likes, referencing because we have user model, so we can get the users information when we need it
  //
  userId: { type: mongoose.Schema.Types.ObjectId },
  reviewDetail: String
});


// One a user has many posts 
// A post belongs to a User
const productSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  productName: String,
  category: String,
  oldPrice: Number,
  newPrice: Number,
  caption: String,
  photoUrl: String,
  // One Product has many reviews, we are using embedding
  review: [reviewsSchema],
});

module.exports = mongoose.model("Product", productSchema);