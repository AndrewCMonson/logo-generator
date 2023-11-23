class Shape {
    constructor(text, color, textcolor){
        this.text = text;
        this.color = color;
        this.textcolor = textcolor;
    }
    render() {
        return `Please enter a valid shape`
  }
}


class Square extends Shape {

    render() {
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="transparent" />
        
        <rect x="75" y="25" width="150" height="150" fill="${this.color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
  }
}

class Circle extends Shape {
    
    render() {
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="white" />
        
        <circle cx="150" cy="100" r="75" fill="${this.color}" />
        
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
  }
}

class Triangle extends Shape {

    render() {
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="white" />
        
        <polygon points="25 181, 150 16, 275 181" fill="${this.color}" />
        
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
  }
}

module.exports = {
    Shape,
    Square,
    Circle,
    Triangle
}