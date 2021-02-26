const router = require('express').Router();
const File = require('../models/file')

router.get('/:uuid' , async (req,res) => {
    try {
        const file = await File.findOne({uuid: req.params.uuid}); 
        if(!file){
            return res.render('download', {error: 'Link has expired. Please try again '});

        }
        return res.render('download',{
            uuid:file.uuid,
            fileName:file.filename,
            fileSize:file.size,
            download:`${process.env.APP_BASED_URL}/files/download/${file.uuid}`
        })
        
    } catch (error) {
        //console.log(error)
        return res.render('download', {error: 'Something went wrong! 404 Page not found :( '});
    }
});


module.exports=router;