const exprs = require('express');
const app = exprs();

app.get('/', (req, res)=>{
res.send('Hello this is home page ..nodemon')

});

app.get('/api/hello',(req, res)=> {
    res.send('Hello this is hello page..');
});

app.get('/api/hello/:year/:month',(req, res)=> {
   res.send('hello the date'  & req.query);
});

//Port

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening port ${port}`)});