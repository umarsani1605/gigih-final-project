import Video from '../models/videoModel.js';

class productService {
  static async getAllById(id) {
    try {
      const video = await Video.findOne({ _id: id }).populate('products');
  
      if(!video) {
        throw new Error("Video is not found.");
      }
  
      const associatedProducts = video.products;
  
      return associatedProducts
  
    } catch (error) {
      throw new Error("Error loading the products: ", error);
    }
  }
}

export default productService