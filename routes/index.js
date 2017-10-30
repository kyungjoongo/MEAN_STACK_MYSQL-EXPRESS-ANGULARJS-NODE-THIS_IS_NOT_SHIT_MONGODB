var express = require('express');
var router = express.Router();

var db = require('./dbconfig')
var unirest = require('unirest');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/kyungjoon', function (req, res, next) {

    db.User.findAll({
        order: [
            ['id', 'DESC']
        ]


    }).then(result => {
        console.log(result)

        res.json(result);
    })

});

router.get('/write', function (req, res) {


    db.User.findAll({
        order: [['id', 'DESC']]

    }).then(result => {
        console.log(result)

        res.render('write', {result: result})
    })



});


/**
 *   레시피 리스트 요청..
 */
router.get('/receipeList', function (req, res) {


    unirest.post('http://35.201.241.181:3000/receipe/listToJson')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .send()
        .end(function (response) {
            res.render('receipeList', {result: response.body})
        });


});

router.get('/receipeListToJson', function (req, res) {


    unirest.post('http://35.201.241.181:3000/receipe/listToJson')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .send()
        .end(function (response) {

            res.json(response.body);
        });


});


module.exports = router;
