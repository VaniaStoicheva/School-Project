const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const courseSchema = new Schema({
    
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

    theacher: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Course', courseSchema);