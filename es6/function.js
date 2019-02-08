// Normal function vs arrow function.
function add(a, b) {
    return a + b
}

const arrow_add = (a,b) => a + b

console.log(add(3, 5))
console.log(arrow_add(3, 5))

let gloom_lek = [1, 2, 3]
gloom_lek = gloom_lek.map(num => num * 2)

console.log(gloom_lek)