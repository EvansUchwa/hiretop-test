import mongoose, { Schema } from "mongoose";

const theschema = new Schema({
    title: { type: String, default: null, required: true },
    filename: { type: String, default: null, required: true },
    url: { type: String, default: null, required: true },
    talent: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
        required: true
    },
}, { timestamps: true })

export default mongoose.models.jobApply || mongoose.model('jobApply',
    theschema);
