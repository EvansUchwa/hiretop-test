import { interviewTypesEnums, jobApplyStatusEnums } from "@/utils/back/enums";
import mongoose, { Schema } from "mongoose";
import User from "./User";

const theschema = new Schema({
    talent: {
        type: mongoose.Schema.Types.ObjectId, ref: User, required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId, ref: 'job', required: true
    },
    applyerMessage: {
        type: String, required: true,
    },
    status: {
        type: String, default: 'pending', enum: jobApplyStatusEnums
    },
    recrutorMessage: {
        type: String, default: null, required: function () {
            if (this.status == 'accepted' || this.status == 'rejected') {
                return true;
            }
            return false;
        }
    },
    interviewType: {
        type: String, default: null, required: function () {
            if (this.status == "accepted") {
                return true;
            }
            return false;
        }, enum: interviewTypesEnums
    },
    interviewDate: {
        type: String, default: null, required: function () {
            if (this.status == "accepted") {
                return true;
            }
            return false;
        }
    },
    interviewHour: {
        type: String, default: null, required: function () {
            if (this.status == "accepted") {
                return true;
            }
            return false;
        }
    }
}, { timestamps: true })

export default mongoose.models.jobApply || mongoose.model('jobApply',
    theschema);
