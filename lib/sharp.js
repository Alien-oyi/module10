class Shape{
    constructor() {
        this.color=''
    }
    setColor(color) {
        this.color=(color)
    }
}
class Circle extends Shape{
    render() {
        return `<circle cx="100" cy="90" r="80"  fill="${this.color}" />`

    }
}
class Square extends Shape{
    render() {
        return `<rect x="8" y="73" width="180" height="10"  fill="${this.color}" />`
    }
}
class Triangle extends Shape{
    render() {
        return `<polygon  width="100%" height="100%" points="100,10 50,160 160,160"  fill="${this.color}" />`
    }
}
module.exports= {Circle,Square,Triangle}