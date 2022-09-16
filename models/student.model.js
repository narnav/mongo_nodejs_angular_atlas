const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    sname: String,
    age: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);