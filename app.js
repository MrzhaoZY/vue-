const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// 处理静态资源
app.use(express.static('public'));
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'mytoken')
    next();
});
//路由
app.get('/data', (req, res) => {
    res.send('Hello World1')
});
app.get('/data1', (req, res) => {
    setTimeout(() => {
        res.send('Hello World111');
    }, 1000)

});
app.get('/data2', (req, res) => {
    res.send('Hello World2222');
})
app.get('/a1', (req, res) => {
    setTimeout(function () {
        res.send('hello a1')
    }, 1000)
})
app.get('/a2', (req, res) => {
    setTimeout(function () {
        res.send('hello a2')
    }, 2000)
})
app.get('/a3', (req, res) => {
    setTimeout(function () {
        res.send('hello a3')
    }, 3000)
})
app.get('/fdata', (req, res) => {
    setTimeout(function () {
        res.send('fetch')
    }, 100)
})
app.get('/books', (req, res) => {
    res.send('传统的url传递参数' + req.query.id)
})
app.get('/books/:id', (req, res) => {
    res.send('Restful的url传递参数' + req.params.id)
})
app.delete('/books/:id', (req, res) => {
    res.send(req.params.id + '已删除')
})
app.post('/books', (req, res) => {
    res.send('post请求参数' + req.body.uname + '--' + req.body.pwd + '--' + req.body.age)
})
app.put('/books/:id', (req, res) => {
    res.send('PUT请求参数' + req.params.id + '---' + req.body.uname)
})
app.get('/json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 20,
        gender: 'male'
    })
})
app.get('/adata', (req, res) => {
    res.send('欢迎axios')
})
app.get('/axios', (req, res) => {
    res.send('axios get 传递参数！' + req.query.id);
})
app.get('/axios/:id', (req, res) => {
    res.send('axios get 传递参数！' + req.params.id);
})
app.delete('/axios', (req, res) => {
    res.send('axios delete 传递参数！' + req.query.id);
})
app.delete('/axios/:id', (req, res) => {
    res.send('axios delete 传递参数！' + req.params.id);
})
app.post('/axios', (req, res) => {
    res.send('axios传递过的参数为：' + req.body.uname + '---' + req.body.age)
})
app.get('/axios-json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 12
    })
})
app.get('/async1', (req, res) => {
    res.send('hello')
})
app.get('/async2', (req, res) => {
    if (req.query.info == 'hello') {
        res.send('world!')

    } else {
        res.send('error')
    }
})
// 启动监听
app.listen(3000, () => {
    console.log('网站服务器启动成功');
})