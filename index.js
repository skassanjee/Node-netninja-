//modules - multiple files

const people = ['satish', 'motilal']
const ages = [32, 23]
console.log(people)

//in main file

const xyz = require('./pathname');


console.log(xyz)
//returns an onject



//we CAN'T access things just because they're imported. We have to manually export 
//back in the people file, we do things


module.exports = 'hello'
//this becomes what is exported if we import the file in


module.exports = 'people'
//then xyz will  be equal to people







//exporting multiple things
module.exports = {
  people, ages
}


console.log(xyz.people, xyz.ages)


//or we can import people specifically
const { people, ages//example } = require('./people')
console.log(people)







const os = require('os')
//core module

console.log(os)
//info about operating system










//THE FILE system
//read, create, delete files


//asynch method
// 1. import the core module
const fs = require('fs')


fs.readFile('./pathname', (err, data) =>{
  if (err){
    console.log(err)
  }
  console.log(data.toString());
});


console.log('hola')
//if we don't add to string, the buffer will be displayed
//hola will show first since it's async




//writing files

fs.writefile('./wheretowrite', 'what to write', ()=>{
  console.log('File was written');
})

//creates file if it doesn't exist
//replaces contents of old file








//directories

if(!fs.existsSync(./assets)){
fs.mkdir('./assets' (err) =>{
  if (err){
    console.log(err);
  }
  console.log('folder created')
})
} else{
  fs.rmdlr('./assets', (err) =>{
    console.log(err)
  }
  console.log('folder deleted')
}


//if the assets folder doesn't exist, the folder will be created or deletes if it exists




//deleting files
if(fs.existsSync(./pathname)){
  fs.unline('.pathoffiletodelete', (err) =>{
    if(err){
      console.log(err)
    }
    console.log('file deleted');
  })
}



Summary:
Good for small files
Big Files should use streams (big files)



//streams
//use data before it's fully read


//Streams pass data into a buffer, the buffer fills up, then is sent to the browser (like netflix)

const fs = require('fs')

//reading a large file

const readStream = fs.createReadStream('./whattoread', );

readStrea.on('data', (chunk) =>{
  //eventlistener
  //every time we receive a buffer
})








