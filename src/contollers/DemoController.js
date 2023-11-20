exports.demo=(req,res)=>{
    // request-> URL/Body/Headers
    // response-> Status Code/Body/Headers
    let nameValue = req.params.name;
    let cityValue = req.params.city;
    res.status(200).json({
        name:nameValue,
        city:cityValue
    })
}

exports.demo2=(req,res)=>{
    let name = req.body['name'];
    let city = req.body['city'];
    let age = req.body['age'];
    res.status(200).json({
        name:name,
        city:city,
        age:age,
    })
}

exports.demo3=(req,res)=>{
    let token = req.headers['token'];
    res.status(200).json({
        'token':token
    })
}

exports.demo4=(req,res)=>{
    let myCookie = req.cookies['Cookie_1'];
    res.status(200).json({
        myCookie:myCookie
    })
}