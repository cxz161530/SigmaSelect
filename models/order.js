const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = require('./productSchema')

const lineProductSchema = new Schema({
    // Set qty to 1 when new item pushed into lineItems
    qty: { type: Number, default: 1 },
    product: productSchema
  }, {
    timestamps: true,
    //add this to ensure virtuals are serialized
    toJSON: {virtuals:true}
  });
  // Add an extPrice to the line item
lineProductSchema.virtual('extPrice').get(function () {
    // 'this' is bound to the lineItem subdocument
    return this.qty * this.product.newPrice;
  });
  


const orderSchema = new mongoose.Schema({
    // An order belongs to a user
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // Embed an order's line items is logical
    lineProducts: [lineProductSchema],
    // A user's unpaid order is their "cart"
    isPaid: { type: Boolean, default: false },
  }, {
    timestamps: true,
    toJSON: {virtuals: true}
  });
  orderSchema.virtual('orderTotal').get(function () {
    return this.lineProducts.reduce((total, item) => total + item.extPrice, 0);
  });
  
  orderSchema.virtual('totalQty').get(function () {
    return this.lineProduct.reduce((total, item) => total + item.qty, 0);
  });
  
  orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
  });



module.exports = mongoose.model("order", orderSchema);


