//routes for displaying and saving data to the db

//dependencies
var db = require("../models");

//routes
module.exports = function(app) {

	//displays full list of burgers in the correct column
    app.get("/", function(req, res) {
        db.burgerlists.findAll({}).then(function(dbBurger) {
        	var hbsObject = {burgerlists: dbBurger};
            res.render("index", hbsObject);
            //console.log(hbsObject);

        });
    });

    //POST route for saving a new post
  app.post("/", function(req, res) {
    db.burgerlists.create(req.body).then(function(dbBurger) {
      // res.render("index", dbBurger);
      // console.log(dbBurger);
      res.redirect("/");
    });
   // res.redirect("/");
  });

//Update route for changing condition of Devoured
  app.put("/:id", function(req, res){
  	console.log(req.params.id);
   	var newBurger = {
  		devoured: 1
  	};

  	//update the value of devoured to 1 when "Devour It!" button is pushed
  	db.burgerlists.update(newBurger, {
  		where: {
  			id: req.params.id
  		}
  	}).then(function(dbBurger){
  		console.log(dbBurger);
  		res.redirect("/");
  	});
});

};