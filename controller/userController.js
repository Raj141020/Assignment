const userModel = require("../model/userModel.js")


exports.createUser= async function(req,res){ // Checking body is empty or not
    try{
        let data = req.body
    if(Object.keys(data).length==0){
        return res.status(400).send({status:false,message:"Body is empty"})
    }

    let {first_name,
        last_name,
        legal_name,
        aadhar_number,
        pan_number,
        gstin_number,
        address,
        state_code,
        state_name,
        google_analytics_id,
        pin_code} = data //Destructuring

    if(!first_name||!last_name||!legal_name||!aadhar_number||!pan_number||!gstin_number||!address||!state_code||!state_name||!google_analytics_id||!pin_code) {
        return res.status(400).send({status:false,message:"all fields must be required"})
    }

    let duplicatePanCheck = await userModel.findOne({pan_number:pan_number})
    if(duplicatePanCheck){
        return res.status(400).send({msg:"pan number is already registered"})
    }

    let duplicateAadharCheck = await userModel.findOne({aadhar_number:aadhar_number})
    if(duplicateAadharCheck){
        return res.status(400).send({msg:"aadhar number is already registered"})
    }

    let duplicategstinCheck = await userModel.findOne({gstin_number:gstin_number})
    if(duplicategstinCheck){
        return res.status(400).send({msg:"gstin number is already registered"})
    }
    
    /*-----------------------------------CREATING -----------------------------------------------------*/

    let userCreate = await userModel.create(data)
    res.status(201).send({status:true,data:userCreate})
    }
    catch(error){
          res.status(500).send({status:true,message:error.message})
    }
    
}
