const express = require('express')
const multer  = require('multer')
const path = require('path')
const app = express()

/* COnfiguring default upload folder and port */

const  UPLOAD_FOLDER = './upload'
const  PORT = 2000


/* Configuring Multer disk storage  */

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,UPLOAD_FOLDER)
    },
    filename:(req,file,cb) => {
        // example file name : Important FIle.pdf => important-file-46464646.pdf //
        const fileExt = path.extname(file.originalname) // .pdf ,.jpg //
        const fileName = file.originalname.replace(fileExt,'').toLowerCase().split('').join('-') + '-' + Date.now()
        cb(null,fileName + fileExt)
    }
})

/* prepare the multer upload  object*/

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000  /* 1MB */ },
    fileFilter:(req,file,cb) => {
        if(
            file.mimetype === 'image/png' || 
            file.mimetype === 'image/jpg' ||
            file.mimetype ==='image/jpeg'
        ) {
            cb(null,true)
        } else {
            cb(new Error('Only JPG , PNG,JPEG format is allowed'))
        }
    }
})

/* FOr multiple input field ,type and tag 

const upload = multer({
    dest: UPLOAD_FOLDER,
    limits: { fileSize: 1000000  },
    fileFilter:(req,file,cb) => {
        if(file.fieldname === 'avatar') {
            if(
                file.mimetype === 'image/png' || 
                file.mimetype === 'image/jpg' ||
                file.mimetype ==='image/jpeg'
            ) {
                cb(null,true)
            } else {
                cb(new Error('Only JPG , PNG,JPEG format is allowed'))
            }
        } else if(file.fieldname === 'doc') {
            if(file.mimetype === 'application/pdf') {
                cb(null,true)
            } else {
                cb(new Error('Only PDF  format is allowed'))
            }
        } else {
            cb(new Error('There was an unknown error'))
        }

    }
}) */

/* For uploading single file */

app.post('/fileupload',upload.single('avatar'),(req,res) => {
    res.send('Single File Upload')
})

/*  for uploading multiple file 

app.post('/fileupload',upload.array('avatar',3),(req,res) => {
    res.send('Multiple File Upload')
})

/* For uploading multiple input 

app.post('/fileupload',upload.fields([
    {name:'avatar',maxCount:1},
    {name:'gallery',maxCount:2}
]),(req,res) => {
    console.log(req.files)
    res.send('Multiple Image input ')
})
 */

/* default express error handling */

app.use((err,req,res,next) => {
    if(err){
        if(err instanceof multer.MulterError) {
            res.status(500).send('There was an upload error')
        } else {
            res.status(500).send(err.message)
        }     
    } else {
        res.send('Success')
    }
})

/*  app listen*/

app.listen(PORT,() => {
    console.log(`App is running on port ${PORT}`)
})