const execmodel = require('./ExerciseModel')
require('../db.js')
const exceTemplate = {
    icon: "image",
    title:
        "Lets Learn togther",
    description:
        "Learning JS togther",
    status: "draft",
    exerciseType: "tutorial",
    difficulty: "hard",
    tags: ["javascript", "html", "css"],
    prog_lang: "ObjectID",
    dev_time: "10MIN",
    content: {
        content: "ContentContent",
        sources: [{
            name: "Link1",
            url: "https:google.com"
        }]
    },
    solution: "The solution",

}
async function create(data) {
    return await execmodel.create(data)
}
// read
async function readAll() {
    return console.log(await execmodel.find());
}

// update
// extra
readAll()
console.log("Lets create")
create(exceTemplate)