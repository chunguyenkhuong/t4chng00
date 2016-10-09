var express = require('express');
var app = express();
var inventory = require('./inventory.js');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 80));

app.use(bodyParser.json());



app.get('/', function(req, res)
{

res.send("Chu Nguyen Khuong Exercise 20123");

});

//**** Student Part

app.get('/student', function(req, res)
{
	res.json(inventory.getStudent());
});

// get student by ID
app.get('/student/:id', function(req, res)
{
	res.json(inventory.getStuId(req.params.id));
});

app.post('/student', function(req, res)
{
	inventory.addstudent(req.body);
    res.sendStatus(201);
});

app.put('/student/:id', function(req, res)
{
	inventory.updateStuId(req.params.id, req.body.Name, req.body.Address, req.body.Class)
	res.send("student updated");
});

app.delete('/student/:id', function(req, res)
{
	inventory.delStuId(req.params.id)
	res.send("student deleted");
});

//**** Course part

app.get('/course', function(req, res)
{
	res.json(inventory.getCourse());
});

// get course by ID

app.get('/course/:id', function(req, res)
{
	res.json(inventory.getCourseId(req.params.id));
});

app.post('/course', function(req, res)
{
	inventory.addCourse(req.body);
    res.sendStatus(201);
});

app.put('/course/:id', function(req, res)
{
	inventory.updateCourseId(req.params.id, req.body.Name, req.body.Description)
	res.send("scourse updated");
});

app.delete('/course/:id', function(req, res)
{
	inventory.delCourseId(req.params.id)
	res.send("course deleted");
});

//**** Course grade part

app.get('/grade', function(req, res)
{
	res.json(inventory.getCourseGrade());
});

// get course grade by ID

app.get('/grade/:id', function(req, res)
{
	res.json(inventory.getCourseGradeId(req.params.id));
});

app.post('/grade', function(req, res)
{
	inventory.addCourseGrade(req.body);
    res.sendStatus(201);
});

app.put('/grade/:id', function(req, res)
{
	inventory.updateCourseGradeId(req.params.id, req.body.Grade, req.body.CourseID)
	res.send("Course Grade updated");
});

app.delete('/grade/:id', function(req, res)
{
	inventory.delCourseGradeId(req.params.id)
	res.send("Course Grade deleted");
});


app.listen(app.get('port'), function()
{

console.log('Node app is running on port', app.get('port'));

});
