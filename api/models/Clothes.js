import mongoose from "mongoose";

const ClothesSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    cate: {
        type: String,
        required: true,
    },
    collect: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    fabric: {
        type: String,
        required: true,
    },
    details: {
        type: [String],
        required : true,
    },
    price: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    size_guide: {
        type: [String],
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Clothes",ClothesSchema)