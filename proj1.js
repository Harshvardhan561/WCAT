const { table } = require("console");
const fs = require("fs");// imports fs module

let input = process.argv.slice(2);
// process.argv reads from terminal 
//slice removes 'node' and 'proj1.js'
//slice :Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.


//console.log(input);


let fileName=[] 
let option=[];

for(let i=0;i<input.length;i++)//.length finds the length of array
{
 if(input[i].charAt(0)=='-')
  {
   option.push(input[i]);// push the elements
  }
 else
  {
    fileName.push(input[i]);   
  } 
}


for(let i=0;i<fileName.length;i++)
{
 if(fs.existsSync(fileName[i]))
 {
  ;
 }
 else
 {
  console.log(fileName[i]+" file does not exists.");
  process.exit();// process.exit() stops the execution
 }

}

//console.log(option);

let content="";

for(let i=0;i<fileName.length;i++)
{
  let content1 = fs.readFileSync(fileName[i],'UTF-8'); // fs.readFileSync(); reads the file
  content+=content1 + "\n";
}

content=content.split("\r\n");

console.table(content);
 
//content=content1.split("\n"); //split :It splits the string based on the input given .output :[ 'hello bro i am coder !\r', '\r', '\r', '\r', '\r', 'hello bro!' ]
// content=content1.split("\r"); //output :[ 'hello bro i am coder !', '\n', '\n', '\n', '\n', '\nhello bro!' ]
//content=content1.split("\r\n"); //output : [ 'hello bro i am coder !', '', '', '', '', 'hello bro!' ]
//use \r\n to remove the \n for windows 

if(option.includes("-s"))
{
  for(let i=1;i<content.length;i++)
  {
    if(content[i]=="" && content[i-1]=="")
    {
      content[i] =  null;
    }
    else
    if(content[i]=="" && content[i-1]==null)
    {
      content[i]=null;
    }
  }
}

console.table(content);

let temp =[];

for(let i=0;i<content.length;i++)
{
  if(content[i]!=null)
  {
    temp.push(content[i]);
  }
}

console.table(temp);