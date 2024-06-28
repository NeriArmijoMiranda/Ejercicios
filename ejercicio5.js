/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array. */
let gente = ["María", "Dani", "Luis", "Juan", "Camila"];
console.log(gente);

gente.splice(gente.indexOf("Dani"), 1);
gente.splice(gente.indexOf("Juan"), 1);
console.log(gente);
let indexLuis = gente.indexOf("Luis");
if (indexLuis > 0) {
    let luis = gente.splice(indexLuis, 1);
    gente.unshift(luis[0]);
}
let agregarNombre = gente.push("Neri");
console.log(gente);

for (let i=0; i < gente.length; i++){ 
console.log(gente[i]);
if (gente[i] === "María"){
    break;
    };
};

console.log(gente.indexOf("María"));
console.log(gente);
