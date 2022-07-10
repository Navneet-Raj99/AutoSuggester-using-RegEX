let chalk=require('chalk')
const navneet=require('./dataarray')
// const navneet =require('./navneet.json')
let input="founded"
// let h=/{input}/i

let h=new RegExp(input,'i')
 console.log(navneet);
  navneet.forEach(element => {
    if(h.exec(element.title)!=null)
    {
    console.log(chalk.blue(h.exec(element.title).input)+"- "+element.description)
    }
    else if(h.exec(element.description)!=null)
    {
        console.log(element.title+"- "+chalk.blue(h.exec(element.description).input))
    }
});