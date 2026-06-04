var studentDatabase = [
    {
        id: 1,
        firstName: "Sipho",
        lastName: "Dlamini",
        email: "sipho.dlamini@student.ac.za",
        course: "Software Development",
        age: 21
    },
    {
        id: 2,
        firstName: "Lerato",
        lastName: "Mokoena",
        email: "lerato.mokoena@student.ac.za",
        course: "Data Science",
        age: 23
    },
    {
        id: 3,
        firstName: "Thabo",
        lastName: "Nkosi",
        email: "thabo.nkosi@student.ac.za",
        course: "Cybersecurity",
        age: 20
    },
    {
        id: 4,
        firstName: "Ayanda",
        lastName: "Zulu",
        email: "ayanda.zulu@student.ac.za",
        course: "Web Design",
        age: 22
    },
    {
        id: 5,
        firstName: "Nomsa",
        lastName: "Mahlangu",
        email: "nomsa.mahlangu@student.ac.za",
        course: "Database Administration",
        age: 24
    }
];

function showSyncSteps() {
    console.log("Step 1: Start");
    console.log("Step 2: Processing");
    console.log("Step 3: End");
}

showSyncSteps();

function getAllStudents() {
    console.log("Fetching all students...");

    setTimeout(function () {
        console.log("Student Records:");

        for (let i = 0; i < studentDatabase.length; i++) {
            let student = studentDatabase[i];
            console.log(
                "ID: " + student.id +
                " | Name: " + student.firstName + " " + student.lastName +
                " | Email: " + student.email +
                " | Course: " + student.course +
                " | Age: " + student.age
            );
        }

        console.log("End of Records.");
    }, 3000);

}

getAllStudents();