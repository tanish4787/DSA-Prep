class MyArr {
    constructor() {
        this.length = 0
        this.data = {}
    }

    insert(item) {
        this.data[this.length] = item
        this.length++

        return this.length;
        //Custom PUSH method
    }

    get(index) {
        return this.data[index]
        //Custom GET method
    }

    remove(item) {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--

        return lastItem

        //Custom POP method
    }

    shift() {
        const firstItem = this.data[0]

        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1]
        this.length--

        return firstItem



    }

    deleteByIndex(index) {
        const item = this.data[index]
        delete this.data[index]

        return item
    }

}
const MyNewArr = new MyArr()
MyNewArr.insert('apple')
MyNewArr.insert('orange')
MyNewArr.insert('lemon')
MyNewArr.deleteByIndex(1)
console.log(MyNewArr);



class Arr {
    constructor() {
        this.length = 0
        this.data = {}

    }

    //INSERT(PUSH), REMOVE(POP), GET, SHIFT

    insert(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    remove() {
        const LastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--

        return LastItem;

    }

    get(index) {
        return this.data[index]
    }

    shift() {
        const firstItem = this.data[0]

        for (let i = 0; i < this.length - 1; i++) {
            this.data[i + 1] = this.data[i]
        }

        delete this.data[this.length - 1]
        this.length--

        return firstItem


    }
}
const newArr = new Arr()
console.log(newArr);

// newArr.insert("yash")
// newArr.insert("parth")
// newArr.insert("hitesh")
// newArr.insert("tanish")
// newArr.insert("rahul")
// console.log(newArr);
// newArr.get(1)
// newArr.shift()
// newArr.remove()
// console.log(newArr);



































