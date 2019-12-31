const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://davidbiton2:12345@cluster33-emxbm.mongodb.net/Eventos', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./user.model');