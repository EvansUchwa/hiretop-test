

import mongoose, { Schema } from "mongoose";

const theschema = new Schema({
    societyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', required: true
    },
    totalJobPosted: { type: Number, default: 0 },
    totalJobApplys: { type: Number, default: 0 },
    totalJobApplysAccepted: { type: Number, default: 0 },
    totalJobApplysRejected: { type: Number, default: 0 },
    conversionRate: { type: Number, default: 0.0 },
}, { timestamps: true })

export default mongoose.models.societyStat || mongoose.model('societyStat', theschema);
