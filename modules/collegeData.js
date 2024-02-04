const fs = require('fs').promises;

class Data {
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }
}

let dataCollection = null;

function initialize() {
  return new Promise(async (resolve, reject) => {
    try {
      const studentsData = await fs.readFile('./data/students.json', 'utf8');
      const coursesData = await fs.readFile('./data/courses.json', 'utf8');
      const students = JSON.parse(studentsData);
      const courses = JSON.parse(coursesData);
      dataCollection = new Data(students, courses);
      resolve();
    } catch (error) {
      reject("Failed to initialize data");
    }
  });
}

function getAllStudents() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.students.length > 0) {
      resolve(dataCollection.students);
    } else {
      reject("No students found");
    }
  });
}

function getTAs() {
  return new Promise((resolve, reject) => {
    if (dataCollection) {
      const tas = dataCollection.students.filter(student => student.TA);
      if (tas.length > 0) {
        resolve(tas);
      } else {
        reject("No TAs found");
      }
    } else {
      reject("Data not initialized");
    }
  });
}

function getCourses() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.courses.length > 0) {
      resolve(dataCollection.courses);
    } else {
      reject("No courses found");
    }
  });
}

module.exports = { initialize, getAllStudents, getTAs, getCourses };