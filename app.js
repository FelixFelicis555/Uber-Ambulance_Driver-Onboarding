const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('connect-flash');
const flash = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const port = process.env.PORT || 8000;

// Connecting the Database



// Routes
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');


// Setting-up Templating engine


// Initialising the passport and sessions for storing the users info


// configuring the passport to use local strategy