function add(x, y) {
  return x + y;
}

function sub(x, y){
  return x - y;
}

class people{
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

export default people;
export {add, sub};