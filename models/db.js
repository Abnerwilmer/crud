const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:abner123@cluster0-1l78l.gcp.mongodb.net/EmployeeDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB Connection succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');