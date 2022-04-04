const request = require('request');

let options = {json: true}; //enables json

var url = `http://starman.atwebpages.com/api/backend.json`; //using my backend as an example

function run()
{
    request(url, options, (res, json) => 
    {
        console.log(json.body) 
        //we do json.body to print the jsons body content, you can also do just json but it will show everything
        //to specify data inside the body, for example "version", you would do json.body.version. keep in mind its case sensitive 
    })
}