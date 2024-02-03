import mongoose, { Schema } from "mongoose";

const theschema = new Schema({
    talent: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId, ref: 'job', required: true
    },
    resume: {
        type: mongoose.Schema.Types.ObjectId, ref: 'resumeFile', required: true
    },
    message: {
        type: String, required: true,
    },
    portfolio: {
        type: String, default: null,
    }
}, { timestamps: true })

export default mongoose.models.jobApply || mongoose.model('jobApply',
    theschema);
