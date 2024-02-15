import { genderEnums } from "@/utils/back/enums";
import mongoose, { Schema } from "mongoose";


const talentUserStringConfig = {
    type: String,
    required: function () {
        return this.role === 'talent';
    },
};

const talentUserNumberConfig = {
    type: Number,
    required: function () {
        return this.role === 'talent';
    },
};

const talentUserArrayConfig = {
    type: Array,
    required: function () {
        return this.role === 'talent';
    },
};


const UserSchema = new Schema({
    role: { type: String, default: null },
    identifier: { type: String, required: true },
    profilPic: { type: Object, default: null },
    email: { type: String, required: true },
    phone: { type: String, default: null },
    country: { type: String, default: true },
    address: { type: String, default: null },
    password: { type: String, required: true },

    societyName: {
        type: String, required: function () {
            if (this.role == 'society') {
                return true;
            }
            return false;
        }, default: null
    },


    profession: talentUserStringConfig,
    gender: talentUserStringConfig,
    firstname: talentUserStringConfig,
    lastname: talentUserStringConfig,
    age: talentUserNumberConfig,
    lastDegree: talentUserStringConfig,
    formations: talentUserArrayConfig,
    skills: talentUserArrayConfig,
    experiences: talentUserArrayConfig,
    expYears: talentUserStringConfig,
    langages: talentUserArrayConfig,
    desiredSalary: talentUserNumberConfig,
    preferredLocations: talentUserArrayConfig,
    linkedinUrl: talentUserStringConfig,


    workSector: {
        type: Array, required: function () {
            if (this.role)
                return true;
            return false;
        }
    },
    description: {
        type: String, required: function () {
            if (this.role)
                return true;
            return false;
        }
    },

    validatedByAdmin: { type: Boolean, default: true },
    emailToken: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    chatId: { type: String, default: null },
    resetPasswordToken: { type: String },
    views: { type: Array, default: [] },

}, { timestamps: true })


const User = mongoose.models.user || mongoose.model('user', UserSchema);
User.ensureIndexes();

export default User;
