import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    role: { type: String, default: null },
    identifier: { type: String, require: true },
    profilPic: { type: Object, default: null },
    email: { type: String, required: true },
    phone: { type: String, default: null },
    country: { type: String, required: true },
    address: { type: String, default: null },
    password: { type: String, required: true },

    gender: {
        type: String, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },
    firstname: {
        type: String, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },
    lastname: {
        type: String, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },
    degree: {
        type: String, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },
    formations: {
        type: Array, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },
    skills: {
        type: Array, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },
    jobExperiences: {
        type: Array, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },
    expYears: {
        type: String, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },
    langages: {
        type: Array, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },
    jobLevel: {
        type: String, required: function () {
            if (this.role == 'talent') {
                return true;
            }
            return false;
        }, default: null
    },


    societyName: {
        type: String, required: function () {
            if (this.role == 'society') {
                return true;
            }
            return false;
        }, default: null
    },

    workSector: { type: String, required: true },
    description: { type: String, required: true },

    validatedByAdmin: { type: Boolean, default: false },
    emailToken: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    chatId: { type: String, default: null },
    resetPasswordToken: { type: String }
}, { timestamps: true })

export default mongoose.models.user || mongoose.model('user', UserSchema);
