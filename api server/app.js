
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var routes = require('./routes/baseRoute');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/api/iot/', routes);
app.use('/',function(req,res){
	res.json(
		{
		"name":"hello World"
		});
});

// catch 404 and forward to respective handler
app.use(function(req,res,next){
	var err= new Error('Not Found');
	err.status=404;
	next(err); 
});

// Dev error handler
if (app.get('env') === 'development') {
	app.use(function(err,req,res,next){
	    res.status(err.status || 500);
	    res.render('error', {
	      message: err.message,
	      error: err
	    });			
	});
}

// Production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports=app;

