import {
  degreeEnum,
  expYearsEnum,
  jobTypeEnum,
  langEnum,
} from "@/utils/back/enums";
import mongoose, { Schema } from "mongoose";
import User from "./User";
const Joi = require("joi");

const jobJoiSchema = Joi.object({
  jobTitle: Joi.string().required(),
  jobSector: Joi.string().required(),
  jobType: Joi.string()
    .required()
    .valid(...jobTypeEnum), // Remplacez les valeurs par celles que vous utilisez

  requiredDegree: Joi.string()
    .required()
    .valid(...degreeEnum), // Remplacez les valeurs par celles que vous utilisez
  requiredExpYear: Joi.string()
    .required()
    .valid(...expYearsEnum), // Remplacez les valeurs par celles que vous utilisez
  requiredLang: Joi.array().required(null),

  jobDescription: Joi.string().required(),
  location: Joi.string().required(), // Assurez-vous que cela devrait être une chaîne ou modifiez le type en conséquence
  tasks: Joi.array().required(), // Assurez-vous que cela devrait être un tableau ou modifiez le type en conséquence
  advantages: Joi.array().required(),

  salary: Joi.number().allow(null).optional(),
  remoteAccepted: Joi.string().default(null),

  applyLimitDate: Joi.string().required(),
}).options({ abortEarly: false, allowUnknown: true });

const theschema = new Schema(
  {
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },

    jobTitle: { type: String, required: null },
    jobSector: { type: String, required: true },
    jobType: { type: String, required: true, enum: jobTypeEnum },

    requiredDegree: { type: String, required: null, enum: degreeEnum },
    requiredExpYear: { type: String, required: null, enum: expYearsEnum },
    requiredLang: { type: Array, required: langEnum },

    jobDescription: { type: String, required: true },

    country: { type: String, required: false },
    location: { type: String, required: false },

    tasks: { type: Array, required: false },
    advantages: { type: Array, required: true },

    salary: { type: Number, default: null },
    remoteAccepted: { type: String, default: null },

    applyLimitDate: { type: String, required: null },
    views: { type: Array, default: [] },
  },
  { timestamps: true }
);

theschema.pre("save", async function (next) {
  try {
    // Convertir le modèle Mongoose en objet simple pour la validation Joi
    const jobData = this.toObject();
    // Valider avec Joi
    await jobJoiSchema.validateAsync(jobData);
    next();
  } catch (error) {
    next(error);
  }
});

const Job = mongoose.models.job || mongoose.model("job", theschema);
Job.ensureIndexes();

export default Job;
