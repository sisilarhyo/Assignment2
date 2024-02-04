/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Funmi Christianah Olupona Student ID: 110608221 Date: 3RD Feb 2024
*
********************************************************************************/ 


const collegeData = require('./modules/collegeData');

async function run() {
  try {
    await collegeData.initialize();
    console.log("Initialization successful");
    const students = await collegeData.getAllStudents();
    console.log(`Successfully retrieved ${students.length} students`);
    const courses = await collegeData.getCourses();
    console.log(`Successfully retrieved ${courses.length} courses`);
    const tas = await collegeData.getTAs();
    console.log(`Successfully retrieved ${tas.length} TAs`);
  } catch (error) {
    console.error(error);
  }
}

run();