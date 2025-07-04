import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    isDeleted: { type: Boolean, default: false } 
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
