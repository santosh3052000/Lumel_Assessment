const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/testdb")

const Schema = new mongoose.Schema
const empSchema = new Schema({
    empID: Number,
    empName: String,
    age: Number,
    salary:Number,
    unit: {
      unitName: String,
      projectType: String
    }
  })

  const employee = mongoose.model('employee', empSchema);

  const emp1 = new employee({
    empID: 101,
    empName: "sam",
    age: 26,
    salary:50000,
    unit: {
      unitName: "ADM",
      projectType: "Development"
    }
  })

  emp1.save()

  employee.where('age').gt(20)