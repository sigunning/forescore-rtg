var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Course'); // Create a table for 'Course' with default settings
mobileApp.tables.add('Player'); // Create a table for 'Player' with default settings
mobileApp.tables.add('Society'); // Create a table for 'Society' with default settings
mobileApp.tables.add('Competition'); // Create a table for 'Competition' with default settings
mobileApp.tables.add('SocietyPlayer'); // Create a table for 'SocietyPlayer' with default settings
mobileApp.tables.add('Round'); // Create a table for 'Round' with default settings
mobileApp.tables.add('PlayerScore'); // Create a table for 'CompPlayer' with default settings


app.use(mobileApp);
app.listen(process.env.PORT || 3000);
