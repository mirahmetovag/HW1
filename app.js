const http = require ('http')
const fs = require ('fs').promises;

http.
createServer(async (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    const groups = JSON.parse( 
    await fs.readFile(process.cwd() + '/groups.json', 'utf-8')); 
    // const a = req.url;
    // const theGroup = groups.filter (id => id == `/$"a"`);
    res.statusCode = 201;
    res.end(JSON.stringify(groups));
}).listen(4000, ()=>{
    console.log(4000);
})