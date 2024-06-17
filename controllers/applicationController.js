import { catchAsyncError } from "../middlewares/catchAsyncError";
import ErrorHandler from "../middlewares/error.js";

export const employerGetAllApplications = catchAsyncError(async(req, res, next)=>{
    const {role} = req.user;
    if(role === "Job Seeker"){
        return next(
            new ErrorHandler(
                "Job Seeker is not allowed to access this resources!",
                400
            )
        );
    }
    const {_id}= req.user;
    const applications = await Application.find({'employerID.user': _id});
    res.status(200).json({
        success: true,
        applications
    })
})

export const jobseekerGetAllApplications = catchAsyncError(async(req, res, next)=>{
    const {role} = req.user;
    if(role === "Employer"){
        return next(
            new ErrorHandler(
                "Employer is not allowed to access this resources!",
                400
            )
        );
    }
    const {_id}= req.user;
    const applications = await Application.find({'applicantID.user': _id});
    res.status(200).json({
        success: true,
        applications
    })
});

export const jobseekerDeleteApplication= catchAsyncError(async(req,res, next)=>{
    const {role} = req.user;
    if(role=== "Employer"){
        return next(
            new ErrorHandler(
                "Employer is not allowed to access this resources!",
                400
            )
        );
    }
    const {id}=req.params;
    const applications = await Application.findById(id);
})