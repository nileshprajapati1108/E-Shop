import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

// Add to cart
export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity = 1 } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    let cartItem = await Cart.findOne({
      user: userId,
      product: productId,
    });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();

      return res.status(200).json({
        success: true,
        message: "Cart updated successfully",
        cartItem,
      });
    }

    cartItem = await Cart.create({
      user: userId,
      product: productId,
      quantity,
    });

    res.status(201).json({
      success: true,
      message: "Product added to cart successfully",
      cartItem,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get user cart
export const getUserCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.find({ user: userId }).populate("product");
    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update cart item
export const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    let cartItem = await Cart.findByIdAndUpdate(
      id,
      { quantity: quantity },
      { new: true },
    );
    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Cart item updated successfully",
      cartItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove cart item
export const removeCartItem = async (req, res) => {
  try {
    const { id } = req.params;

    await Cart.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Cart item removed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Clear cart
export const clearCart = async (req, res) => {
  try {
    const userId = req.user.id;

    await Cart.deleteMany({ user: userId });
    res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
