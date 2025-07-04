import User from '../models/userModel.mjs';
import bcrypt from 'bcryptjs';

const userController = {
  createUser: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      // Check if email already exists
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(409).json({ message: 'Email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);


      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role: role || 'user'
      });

      const savedUser = await newUser.save();

      return res.status(201).json({
        message: 'User created successfully',
        data: {
          id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email,
          role: savedUser.role
        }
      });
    } catch (error) {
      console.error('Error in createUser:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  }
};

export default userController;
