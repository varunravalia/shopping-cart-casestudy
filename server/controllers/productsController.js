const { products } = require("../staticData/productList")
exports.getAllProducts=async(req, res)=>{

    // res.cookie('token', 1234, { httpOnly: true,maxAge: 900000,sameSite:true,origin:'http://localhost:3001'});
    res.status(200).json(products)
}

exports.getProduct=(req,res)=>{
    const id=req.params.id
    return res.status(200).json(products.find(item=>item.id==id))
}