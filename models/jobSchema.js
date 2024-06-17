import mongoose from "mongoose";

const jobSchema= new mongoose.Schema({
    title:{
        type: String, 
        required: [true, "Please provide job title"],
        minLength: [3, "Job title must contain at least 3 characters!"],
        maxLength: [50,"Job title cannot exceed 50 characters!"],

    },
    description:{
        type:String,
        required: [true, "Please provide job description"],
        minLength: [3, "Job title must contain at least 3 characters!"],
        maxLength: [50,"Job title cannot exceed 50 characters!"],


    },
    category:{
        type:String,
        required:[true, "Job category is required!"]
    },
    country:{
        type:String,
        required:[true, "Job country is required!"]
    },
    city:{
        type:String,
        required:[true, "Job city is required!"]
    },
    location:{
        type:String,
        required:[true, "Please provide exact location!!"],
        minLength:[50, "Job location must contain at least 50 characters!"],
    },
    fixedSalary:{
        type:String,
        minLength:[4, "Fixed salary must contain at lest 4 digits!"],
        maxLength: [9,"Fixed salary cannot exceed 9 digits!"],
    },
    salaryFrom:{
        type:String,
        minLength:[4, "Salary From must contain at lest 4 digits!"],
        maxLength: [9,"Salary From cannot exceed 9 digits!"],

    },
    salaryTo:{
        type:String,
        minLength:[4, "SalaryTo must contain at lest 4 digits!"],
        maxLength: [9,"SalaryTo cannot exceed 9 digits!"],

    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
   
});

export const Job = mongoose.model("Job", jobSchema);
