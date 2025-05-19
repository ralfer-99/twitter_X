import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({

    from: {

        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true

    },

    to: {

        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
        
    }



}, {timestamps:true})