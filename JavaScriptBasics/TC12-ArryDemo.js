let arrayDemo = [1, 2, 3, 4, 5,];
let arrayDemo1String = ["i am new to JS", "iam new to playwright"];
let arraydemo2 = [1, "iam new to JS", true, 3, 14];
let broeserlist = ["chrome", "firefox", "edge", "safari"];
letn0slist = ["windows", "mac", "linx", "android", "ios"];
let envlistany = new Arry["staging", "QA", "Dev"];

envlist.push("prod") // adds "Prod" to the end of the envlist array

console.log(envlist)
envlist.pop()// removes the last element from the envlist array
envlist.log(envlist)
envlist.unshift()// remove the first element from the envlist array and adds "UAt"at the begining
console, log(envlist)
envlist.unshift()// removes the first element from the envlist array


let arrayDemoNumber = [];


aconsole.log(arrayDemo[0]); // prints 100
console.log(arrayDemo[1]); // prints 200
console.log(arrayDemo[2]); // prints 300
console.log(arrayDemo[3]); // prints 400
console.log(arrayDemo[4]); // prints 500

let charArray = ['C', 'a']
let arrayDemo1 = ["I am new to JS", "I am new to JAVA", "I am new to Playwright"];
let arrayDemo2 = [1, "I am new to JS", true, 3.14]
let browserList = ["chrome", "firefox", "edge", "safari"]
let oslist = ["windows", "mac", "linux", "android", "ios"]
let envlist = new Array("Staging", "QA", "Dev")

envlist.push("Prod") // Adds "Prod" to the end of the envlist array
console.log(envlist)
envlist.pop() // Removes the last element from the envlist array
console.log(envlist)
envlist.shift() // Removes the first element from the envlist array
console.log(envlist)
envlist.unshift("Unshiftlist") // Adds "Unshiftlist" to the beginning of the envlist array
console.log(envlist)
envlist.unshift()
console.log(envlist)
console.log(envlist.length)
if (envlist.includes("QAa")) {
    console.log("Environment is Present")
}
else {
    console.log("Environment is not Present")
}
S
browserList.forEach(function (bro) {
    console.log(bro)
})

browserList.forEach((brows) => {
    console.log(brows)
})

for (let bro of browserList) {
    console.log(bro)
}

for (let number in arrayDemo) {
    console.log(arrayDemo[number]) // Output will be the values of the arrayDemo
}
//Array for key value pair
let empDetails = {
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000
}

console.log(empDetails.name);
console.log(empDetails.age);
empDetails.empCode = "E123"
console.log(empDetails)
delete empDetails.salary
console.log(empDetails)

for (let demo in empDetails) {
    console.log("Key is :" + demo + "   Value - " + empDetails[demo])
}
//JSON - 15 Data
let userCreds = [
    { username: "user1", password: "pass1", role: "admin" },
    { username: "user2" },
    { username: "user3", password: "pass3", role: "superadmin" }
]

userCreds.forEach((cred) => {
    console.log(cred)
    if (cred.username === "user2") {
        console.log("Execute the test cases")
        console.log(cred.username)
    }
    else {
        console.log("==== ERROR ====")
    }
})