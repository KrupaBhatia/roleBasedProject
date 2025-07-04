import Product from '../models/productModel.mjs';

const productController = {
  // cretae  Product (Admin only)
  createProduct: async (req, res) => {
    try {
      const { name, description, price } = req.body;

      if (!name || !description || !price) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const newProduct = new Product({ name, description, price });
      const savedProduct = await newProduct.save();

      return res.status(201).json({ message: 'Product created', data: savedProduct });
    } catch (error) {
      console.error('Create Product Error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  },

  // get All Products (to all)
  getAllProducts: async (req, res) => {
    try {
        const products = await Product.find({ isDeleted: false }).sort({ createdAt: -1 });
      return res.status(200).json({ data: products });
    } catch (error) {
      console.error('Get All Products Error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  },

  // get One Product by ID (to all)
  getProductById: async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id, isDeleted: false });
        if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      return res.status(200).json({ data: product });
    } catch (error) {
      console.error('Get Product By ID Error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  },

  // UPDATE Product (Admin)
  updateProduct: async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const updated = await Product.findByIdAndUpdate(
        req.params.id,
        { name, description, price },
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.status(200).json({ message: 'Product updated', data: updated });
    } catch (error) {
      console.error('Update Product Error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  },

  // DELETE Product (Admin)
  deleteProduct: async (req, res) => {
    try {
        const deleted = await Product.findByIdAndUpdate(
            req.params.id,
            { isDeleted: true },
            { new: true }
          );          
      if (!deleted) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Delete Product Error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  }
};

export default productController;
