import mongoose from "mongoose";

const GifSchema = new mongoose.Schema({
    url: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})

export default mongoose.model('gif', GifSchema)