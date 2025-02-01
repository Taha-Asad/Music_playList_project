import mongoose from "mongoose" ;

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true , 
    },
    userName:{
        type:String ,
        require: true ,
        unique: true
    },
    email:{
        type:String,
        require: true ,
        unique: true
    },
    password:{
        type:String ,
        require:true
    },
    profilePic:{
        type:String,
        default:""
    },
    playList:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref : "PlayList"
    }],
    fav:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Song"
    }],
    createdAt:{
        type:Date ,
        default: Date.now
    },
    role:{
        type:String ,
        enum:["user" , "admin"] ,
        default: "user"
    }
})

export default mongoose.model('User' , userSchema);