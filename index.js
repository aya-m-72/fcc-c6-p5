var express = require('express');
var cors = require('cors');
require('dotenv').config()
 
const multer = require('multer')
const upload = multer({dest:"uploads/"})

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.array("upfile"),(req,res)=>{
  const {originalname:name, mimetype:type, size}= req.files[0]
  
  res.json({
    "name":name,
    "type":type,
    "size":size
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
