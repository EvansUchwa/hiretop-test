import mongoose, { Schema } from "mongoose";

const theschema = new Schema({
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
    },

    title: { type: String, default: null },
    jobSector: { type: String, require: true },
    jobType: { type: String, require: true },

    degreeRequired: { type: String, default: null },
    expYearsRequired: { type: Number, default: null },
    langagesRequired: { type: Array, default: null },
    jobLevelRequired: { type: Array, default: null },
    remoteAccepted: { type: Boolean, default: null },
    needPortfolio: { type: String, default: null },

    description: { type: String, required: true },
    location: { type: String, default: false },
    tasks: { type: Array, default: false },
    advantages: { type: Array, required: true },
    salary: { type: Number, default: null },
    salaryCurrency: { type: String, default: null },
    views: { type: Array, default: null },

}, { timestamps: true })

export default mongoose.models.job || mongoose.model('job', theschema);
