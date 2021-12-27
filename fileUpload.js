const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()

const UPLOAD_FOLDER = './upload'

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
      cb(null,UPLOAD_FOLDER)
  },
  filename:(req,file,cb) => {
      const fileExt = path.extname(file.originalname)
      const fileName = file.originalname.replace(fileExt,'').toLowerCase().split('-') + '-' + Date.now()
      cb(null,fileName + fileExt)
  }
})

const upload = multer({
    storage:storage,
    limits: { fileSize: 1000000 },
    fileFilter:(req,file,cb) => {
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null,true)
        } else {
            cb(new Error('Only Jpg,Png,Jpeg format is supported'))
        }
    }
})


app.post('/uploadFile',upload.array('avatar',2),(req,res) => {
    res.send('File Upload Success')
})


app.use((err,req,res,next) => {
    if(err) {
        if(err instanceof multer.MulterError){
            res.status(500).send('Internal Server Error')
        } else if(err.message) {
            res.status(500).send(err.message)
        }
    } else {
        res.send('Succcess')
    }
})

app.listen(2000,() => {
    console.log('App is running on port 2000')
})