// Here is used to store student's data.

var express = require('express');
var data = require('./inventory.js');

var stuInfo = [
	{
	Name: "Kimmo", Address: "Tampere", Class: "DIN14SN", ID: 1
	},
	{
	Name: "Sebastian", Address: "Turku", Class: "DIN14SN", ID: 2
	}, 
	{
	Name: "Daniel", Address: "Varisou", Class: "DIN14SN", ID: 3
	},
	{
	Name: "Janne", Address: "Oulu", Class: "DIN14SN", ID: 4
	}
];

var courseInfo = [
	{
	Name: "Kimmo", Description: "D1", ID: 1
	},
	{
	Name: "Sebastian", Description: "D2", ID: 2
	}, 
	{
	Name: "Daniel", Description: "D3", ID: 3
	},
	{
	Name: "Janne", Description: "D4", ID: 4
	},
];

//**** student part
exports.getStudent = function() 
{
    return stuInfo;
}

exports.addstudent = function(student)
{
    stuInfo.push(student);
}
 
// get student by ID
exports.getStuId = function(id)
{
    return stuInfo.filter(function(student){
        if(student.ID == id)
        {
            return student;
        }
    });
}

exports.updateStuId = function(id, a, b,c)
{
    return stuInfo.filter(function(student){
        if(student.ID == id)
        {
			student.Name = a;
			student.Address = b;
			student.Class = c;
        }
    });
}

exports.delStuId = function(id)
{
    return stuInfo.filter(function(student,index){
        if(student.ID == id)
        {
            stuInfo.splice(index,1);
        }
    });
}

//**** Course part

exports.getCourse = function() 
{
    return courseInfo;
}


exports.getCourseId = function(id)
{
    return courseInfo.filter(function(course){
        if(course.ID == id)
        {
            return course;
        }
    });
}

exports.updateCourseId = function(id, a, b)
{
    return courseInfo.filter(function(course){
        if(course.ID == id)
        {
			course.Name = a;
			course.Description = b;
        }
    });
}

exports.delCourseId = function(id)
{
    return courseInfo.filter(function(course,index){
        if(course.ID == id)
        {
            courseInfo.splice(index,1);
        }
    });
}

exports.addCourse = function(course)
{
    courseInfo.push(course);
}