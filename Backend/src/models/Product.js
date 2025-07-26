import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  wholesaler_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  unit: { type: String }, // e.g., kg, litre
  stock: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
