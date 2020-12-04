const multer = require('multer');
const criminfo = require('../criminal');


var multerstorage = multer.diskStorage({

destination:(req,file,cb)=>{
    console.log(file);
    cb(null,'public/crimimg');
},
filename:(req,file,cb)=>{

    const extension = file.mimetype.split('/')[1];
    cb(null,`criminal-${req.body.crname}.${extension}`);



}

});

const imagefilter = (req,file,cb)=>{
try{

    if(file.mimetype.startsWith('image')){

        cb(null,true);
    
    }else{
        cb(res.send("error"),false);
    }

}catch(err){
    
}

}

const upload = multer({

    storage:multerstorage,
    fileFilter:imagefilter
});

exports.uploadimage = upload.single('photo');

exports.createnewcriminal = async(req,res)=>{


    try{

console.log(req.file);
console.log(req.body);

        const {crname,loca,description} = req.body;
        const anmm = req.file.filename;
        const criminalsaved = await criminfo.create({crimname:crname,crimtype:description
                                            ,criminallocation:loca,
                                            criimage:anmm});
        console.log(criminalsaved);
        res.send("Uploaded successfully");
            
    }catch(err){
console.log(err);
        res.send("error while uploading");
    }


}

exports.getalllocationcrim = async(req,res)=>{

const {location} = req.body;

const criminal = await criminfo.find({criminallocation:location});

res.json({

crim:criminal

});



}
