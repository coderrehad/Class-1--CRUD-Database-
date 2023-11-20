const ProductsModel=require('../Models/ProductsModel');

//C = Create
exports.CreateProduct= async (req,res)=> {
    try {
        let reqBody = req.body;
        let result=await ProductsModel.create(reqBody);
        res.status(200).json(
            {
                status:"success",
                data:result
            }
        )
    }catch (e) {
        res.status(200).json(
            {
                status:"fail",
                data:e.toString()
            }
        )
    }
}

//R = Read
 exports.ReadProduct = async (req, res)=>{
    try {
        let productName = req.body['productName'];
        let projection = "productName productCode"
        let result = await ProductsModel.find({productName}, projection);
        res.status(201).json({
            status:"Success",
            data: result
        })
    }
    catch (err){
        res.status(404).json({
            status: "fail",
            data: err.toString()
        })
    }
 }

 //D = Delete
exports.DeleteProduct = async (req,res)=>{
    try{
        let productName = req.body['productName']
        let result = await ProductsModel.deleteOne({productName});
        res.status(201).json({
            status: "Success",
            data: result
        })
    }
    catch (err){
        res.status(404).json({
            status: "fail",
            data: err.toString()
        })
    }
}

//U = Update
exports.UpdateProduct = async (req,res)=>{
    try {
        let id = req.params.id;
        let reqBody = req.body;
        let result = await ProductsModel.updateOne({_id:id}, reqBody);
        res.status(201).json({
            status: "Success",
            data: result
        })
    }
    catch (err){
        res.status(404).json({
            status: "fail",
            data: err.toString()
        })
    }
}