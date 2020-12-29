const multer = require('multer');
const criminfo = require('../criminal');
const videosdb = require('../allvideosdatabase');

var multerstorage = multer.diskStorage({

destination:(req,file,cb)=>{
    console.log(file);

if(file.mimetype.startsWith('video')){
    cb(null,'public/allvideos');

}else{
    cb(null,'public/crimimg');

}

},
filename:(req,file,cb)=>{


    const extension = file.mimetype.split('/')[1];


    if(file.mimetype.startsWith('video')){
        cb(null,`criminal-${req.body.loct}.${extension}`);
    
    }else{
        cb(null,'public/crimimg');
    
    }





}

});

const imagefilter = (req,file,cb)=>{
try{

    if(file.mimetype.startsWith('image')){

        cb(null,true);
    
    }else if(file.mimetype.startsWith('video')){
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

exports.uploadvideo = upload.single('videofile');

exports.createnewvideodis = async(req,res)=>{

  const {loct,desc} = req.body;
const vd = req.file.filename;
    const createvideoindb = await videosdb.create({

location:loct,
description:desc,
videolocation:vd

    });

    if(createvideoindb!=null){

res.send("OK");

    }else{

res.send("Not ok");

    }


}


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
