import mongoose, { Schema } from "mongoose";

const theschema = new Schema({
    talent: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId, ref: 'job', required: true
    },
    applyerMessage: {
        type: String, required: true,
    },
    isValidate: {
        type: Boolean, default: false,
    },
    isValidateMessage: {
        type: String, default: null,
    },
}, { timestamps: true })

export default mongoose.models.jobApply || mongoose.model('jobApply',
    theschema);
