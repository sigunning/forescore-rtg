var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Course'); // Create a table for 'Course' with default settings
mobileApp.tables.add('Player'); // Create a table for 'Player' with default settings
mobileApp.tables.add('Society'); // Create a table for 'Society' with default settings
mobileApp.tables.add('Event'); // Create a table for 'Event' with default settings
mobileApp.tables.add('SocietyPlayer'); // Create a table for 'SocietyPlayer' with default settings


app.use(mobileApp);
app.listen(process.env.PORT || 3000);
