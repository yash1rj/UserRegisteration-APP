----
## UserRegisteration-APP
An app for user registeration using Node,Express and MongoDB with the facility of hashed passwords, authenticating users and JWT.


----
User Registration systems in Node.js using MongoDB as the data store, Express as the routing system, Joi as the validator, and of course Mongoose to make interacting with Mongo from Node easy.

----
## Create a User Model
* First up we create a User Model user.model.js in models directory. 
* At the top of the file, we require Joi and Mongoose as we will need them for validation and for creating the User Mongodb Schema. 
* Then, we create the User Schema and define the requirements for name, email, and password. 
* The User Schema is stored in User.
* Next up we create a validation function named validateUser.
* Lastly we export these modules so we can require them elsewhere.

----
## Set Up Users Routes
* Now that we have a User Model set up which both defines the schema we need to follow and the validation rules, we can create a users.js routes file in our routes directory. 
* In this file, the first thing we do right at the top is to require, or import, the User schema and validate schema that we just exported in user.model.js. 
* Next we make sure Express is initialized. 
* First the http post request gets validated, then we check to see if the user already exists in the database, and finally we create a new user if they do not exist in the database and also if they pass all validation requirements. 
* Lastly we export the router, so we can use it in the index.js file.

----
## Hash Passwords With Bcrypt
* The rudimentary portion of the user registration is now working however the password is in clear text. 
* This is a big no no, so we'll encrypt the password before saving into the database using the bcrypt package.
* We use it in the users.route.js routes file like so. 
* At the top of the file, we require the bcrypt package which makes it available to use further down in the file. 
* We then generate a salt, and use it to hash the password before saving.

----
## Using Lodash To Simplify Our Code
* Import the lodash package
* Lodash is a powerful JavaScript utility library similar to the popular Underscore Library.
* Specifically in this instance we are going to use the pick function which makes working with objects more neat. 
* Now, once we import lodash into our file, we can make use of these handy one liners highlighted here.
    // user = new User(_.pick(req.body, ['name', 'email', 'password']));
    // res.send(_.pick(user, ['_id', 'name', 'email']));
