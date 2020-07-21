// console.log(process.argv);

// var flag=process.argv.indexOf('--user');
// console.log(flag);

process.stdout.write("what is your name?\n");
process.stdin.on('data',function(answer){
    console.log(answer.toString().trim());
    process.exit();
})