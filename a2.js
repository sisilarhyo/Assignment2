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