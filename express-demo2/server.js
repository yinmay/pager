var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(request, response) {
    let page = request.query.page || 1
    let db = []


    for (let i = 0; i < 1000; i++) {
        db.push({
            title: `title${i+1}`,
            content: `content${i+1},text too much`
        })
    }


    // let data = db.slice(0, 10) //page1
    // let data = db.slice(10, 20) //page2
    let data = {
        articles: db.slice(10 * (page - 1), 10 * page),
        totalPages: Math.ceil(db.length / 10),
        currentPage: page
    }
    response.render('home', data);
});

app.listen(3000);
console.log('server started:')