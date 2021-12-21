class Stack{
    constructor(){
        this.stack = []
    }

    push(element) {
        this.stack.push(element)
        return this.stack
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length -1]
    }

    size(){
        return this.stack.length
    }

    print(){
        console.log(this.stack)
    }
}
const stack = new Stack()

console.log(stack.push('Julian'))
console.log(stack.push('Juana'))
console.log(stack.pop())
console.log(stack.print())

