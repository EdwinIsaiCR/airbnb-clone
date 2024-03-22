import mongoose from "mongoose";

const casaSchema = new mongoose.Schema(
    {
        id: {type: String, require: true, unique: true},
        title: {type: String, require: true},
        image: {type: String, require: true},
        price: {type: Number, require: true},
        description: {type: String, require: true},
    },
    { timestamps: true}
)

const Casa = mongoose.model.Casa || mongoose.model("Casa", casaSchema);
module.exports = Casa