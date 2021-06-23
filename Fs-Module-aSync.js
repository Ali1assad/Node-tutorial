const {writeFile , readFile} = require('fs');

console.log('start');
readFile('./content/first.txt' , 'utf8' , (err , result) =>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;

    readFile('./content/second.txt' ,  'utf8', (err , result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        console.log(first ,second);

        writeFile('./content/result-txt-async.txt' , `${first} ${second}`,(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log('end this task');
        })
    })
})

console.log('start anuther task');