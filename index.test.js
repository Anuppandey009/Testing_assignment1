

var sum=require("./index.js")

describe("test case for sum function", function(){
test("sum function is defined",()=>{
       expect(sum).toBeDefined() 
})
})


describe("toBe tests",()=>{
    test("toBe",()=>{
        expect(10).toBe(10)
        expect(100).toBe(100)
        expect(false).toBe(false)
        expect(true).toBe(true)
    })

    test("toBe",()=>{
        expect(10).toBe(10)
        expect(100).toBe(100)
        expect(false).toBe(false)
        expect(true).toBe(true)
    })
})