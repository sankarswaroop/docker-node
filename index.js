var express = require('express'),
	app 	= express(),
	router 	= express.Router(),
	bodyParser 		= require('body-parser');
 	//methodOverride 	= require('method-override');


	//Middleware for REST API
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	//app.use(methodOverride('X-HTTP-Method-Override'));
	//CORS Support for REST API
	app.use(function(req,res,next){
		res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type,application/json,Origin,X-Requested-With,Accept');
		res.header("Access-Control-Allow-Credentials", true);
		next();
	});

	app.get('/list', (req, res) => {
		res.send([
			{
				fName: 'Shankar',
				lName: 'Swaroop',
				age: 35,
			}
		]);
	});

	app.listen(8090, () => console.log('Example app listening on port 8090!'));

