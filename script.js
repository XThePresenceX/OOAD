var express = require('express');
var mysql = require('mysql');
var app = express();
const http = require('http');
const path = require('path');
var fs = require('fs');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phase1'
});

connection.connect(function(error){

    if(error){
        console.log('Error');
    }

    else{
        console.log("Server connection established");
        console.log("Server running on port: 1337");
    }

});

app.get('/', function(req,res){

    res.sendfile('index.html');
    //__dirname : It will resolve to your project folder.

})



app.get('/AbandonedVehicles', function(req,res){
    connection.query("SELECT * FROM abandonedvehicle_2019__1_", function(error, rows, fields){
        if(error){
            console.log("Error: ", error);
        }

        else{
            console.log("Connected");
            res.send(rows);
        }
    });
})

app.get('/buildingImproperLand', function(req,res){
    connection.query("SELECT * FROM buildinglandimproperuse", function(error, rows, fields){
        if(error){
            console.log("Error: ", error);
        }

        else{
            console.log("Connected");
            res.send(rows);
        }
    });
})

app.get('/GarbageNotCollected', function(req,res){
    connection.query("SELECT * FROM garbagenotcollected", function(error, rows, fields){
        if(error){
            console.log("Error: ", error);
        }

        else{
            console.log("Connected");
            res.send(rows);
        }
    });
})

app.get('/Libraries', function(req,res){
    connection.query("SELECT * FROM libraries", function(error, rows, fields){
        if(error){
            console.log("Error: ", error);
        }

        else{
            console.log("Connected");
            res.send(rows);
        }
    });
})

app.get('/Hospitals', function(req,res){
    connection.query("SELECT * FROM hospitals", function(error, rows, fields){
        if(error){
            console.log("Error: ", error);
        }

        else{
            console.log("Connected");
            res.send(rows);
        }
    });
})

app.get('/fireStations', function(req,res){
    connection.query("SELECT * FROM fire_stations", function(error, rows, fields){
        if(error){
            console.log("Error: ", error);
        }

        else{
            console.log("Connected");
            res.send(rows);
        }
    });
})

app.get('/electionResults', function(req,res){
    connection.query("SELECT * FROM results_2020", function(error, rows, fields){
        if(error){
            console.log("Error: ", error);
        }

        else{
            console.log("Connected");
            res.send(rows);
        }
    });
})

app.get('/parks', function(req,res){
    connection.query("SELECT * FROM park_name_and_addresses", function(error, rows, fields){
        if(error){
            console.log("Error: ", error);
        }

        else{
            console.log("Connected");
            res.send(rows);
        }
    });
})


app.listen(1337);