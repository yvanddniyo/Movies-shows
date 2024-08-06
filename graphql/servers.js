// class MyClass {
//     constructor(name, age, school) {
//         this.name = name
//         this.age = age
//         this.school = school
//     }
//     profile() {
//         return `This student named ${this.name} has ${this.age} years old and study at ${this.school} 👆`
//     }
// }

// const myClassInstance =  new MyClass("Yvan", 23, "Iprc Huye")
// const result = myClassInstance.profile()
// console.log(result);
const express = require("express")
const { createHandler } = require("graphql-http/lib/use/express")
const { buildSchema } = require("graphql")
const { ruruHtml } = require("ruru/server")


const schema = buildSchema(`
 type Query {
    hello: String
 }
`)

const root = {
    hello () {
        return `Hello World`
    }
}
const app = express()

app.all("/graphql", createHandler({
    schema: schema,
    rootValue: root
}))

app.get("/graphql", (_req, res) => {
    res.type("html")
    res.end(ruruHtml({endpoint: "/graphql"}))
})

app.listen("3000", console.log("Running a GraphQL API server at http://localhost:3000/graphql"))