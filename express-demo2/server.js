var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(request, response) {
    let page = request.query.page || 1 //get page query string 获取查询字符串
    let db = [
            { title: 'title1', content: 'text1,lots of text' },
            { title: 'title2', content: 'text2,lots of text' },
            { title: 'title3', content: 'text3,lots of text' },
            { title: 'title4', content: 'text4,lots of text' },
            { title: 'title5', content: 'text5,lots of text' },
            { title: 'title6', content: 'text6,lots of text' },
            { title: 'title7', content: 'text7,lots of text' },
            { title: 'title8', content: 'text8,lots of text' },
            { title: 'title9', content: 'text9,lots of text' },
            { title: 'title10', content: 'text10,lots of text' },
            { title: 'title11', content: 'text11,lots of text' },
            { title: 'title12', content: 'text12,lots of text' },
            { title: 'title13', content: 'text13,lots of text' },
            { title: 'title14', content: 'text14,lots of text' },
            { title: 'title15', content: 'text15,lots of text' },
            { title: 'title16', content: 'text16,lots of text' },
            { title: 'title17', content: 'text17,lots of text' },
            { title: 'title18', content: 'text18,lots of text' },
            { title: 'title19', content: 'text19,lots of text' },
            { title: 'title20', content: 'text20,lots of text' },
            { title: 'title21', content: 'text21,lots of text' },
            { title: 'title22', content: 'text22,lots of text' },
            { title: 'title23', content: 'text23,lots of text' },
            { title: 'title24', content: 'text24,lots of text' },
            { title: 'title25', content: 'text25,lots of text' },
            { title: 'title26', content: 'text26,lots of text' },
            { title: 'title27', content: 'text27,lots of text' },
            { title: 'title28', content: 'text28,lots of text' },
            { title: 'title29', content: 'text29,lots of text' },
            { title: 'title30', content: 'text30,lots of text' },
            { title: 'title31', content: 'text31,lots of text' },
            { title: 'title32', content: 'text32,lots of text' },
            { title: 'title33', content: 'text33,lots of text' },
            { title: 'title34', content: 'text34,lots of text' },
            { title: 'title35', content: 'text35,lots of text' },
            { title: 'title36', content: 'text36,lots of text' },
            { title: 'title37', content: 'text37,lots of text' },
            { title: 'title38', content: 'text38,lots of text' },
            { title: 'title39', content: 'text39,lots of text' },
            { title: 'title40', content: 'text40,lots of text' },
            { title: 'title41', content: 'text41,lots of text' },
            { title: 'title42', content: 'text42,lots of text' },
            { title: 'title43', content: 'text43,lots of text' },
            { title: 'title44', content: 'text44,lots of text' },
            { title: 'title45', content: 'text45,lots of text' },
            { title: 'title46', content: 'text46,lots of text' },
            { title: 'title47', content: 'text47,lots of text' },
            { title: 'title48', content: 'text48,lots of text' },
            { title: 'title49', content: 'text49,lots of text' },
            { title: 'title50', content: 'text50,lots of text' }


        ]
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