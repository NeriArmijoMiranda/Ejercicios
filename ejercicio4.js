/*Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console. */
/*Cree un programa que recorra las 2 matrices; Si hay cursos comunes, imprímalos en la consola. */
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
const commonSubjects = (courses1, courses2) => { 
    let commonCourses = courses1.filter(course => courses2.includes(course));
    
    return commonCourses;
};
commonCourses = commonSubjects(student1Courses, student2Courses);

console.log("Common courses:");
commonCourses.forEach(course => {
    console.log(course);
});
