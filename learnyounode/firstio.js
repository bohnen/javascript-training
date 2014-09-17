var fs = require('fs');
var file = process.argv[2]; // first 'node', next $0 , third is first argv.
var lines = fs.readFileSync(file).toString().split('\n');

console.log(lines.length - 1);

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
    