var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles =
{
    'article-one' : {
  title: 'Article 1 | Ayush Kumar',
  heading: 'Article 1',
  date: '19th August 2017',
  content: `
  <p>
         This is my first article and i am happy to launch it!
    </p>
    <p>
            I actually am very happy that i am able to do all this, Damn  this is FUN!
    </p>`
},
    'article-two' : {
        title: 'Article 2 | Ayush Kumar',
  heading: 'Article 2',
  date: '20th August 2017',
  content: `
  <p>
         This is my second article and i am happy to launch it!
    </p>
    <p>
            I actually am very happy that i am able to do all this, Damn  this is FUN!
    </p>`
    },
    'article-three' : {
        title: 'Article 3 | Ayush Kumar',
  heading: 'Article 3',
  date: '21st August 2017',
  content: `
  <p>
         This is my Third article and i am happy to launch it!
    </p>
    <p>
            I actually am very happy that i am able to do all this, Damn  this is FUN!
    </p>`
    }
};
function createTable(data)
{
var title=data.title;
var date=data.date;
var content=data.content;
var heading=data.heading;
var htmlTemplate =`
<html>
<head>
    <title>
           ${title}
    </title>
    <meta name='viewport' content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>

             <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            <h3>
            ${heading}
            </h3>
<div>
                ${date}
 </div>
${content}           
</div>
    
    
</body>
</html>


`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req,res) {
   counter =counter +1;
   res.send(counter.toString());
});

app.get('/:articleName', function (req,res) {
  //articleName == article-one
  //articles[articleName] == {} content object for article one
  var articleName = req.params.articleName;
  res.send(createTable(articles[articleName]));
});

app.get('/article-two', function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
