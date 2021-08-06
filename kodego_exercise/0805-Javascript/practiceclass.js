  class Vehicle {
          constructor(brand, model, color) {
            this.brand = brand;
            this.model = model;
            this.color = color;
          }
          getBrandModel() {
            return `${this.brand} ${this.model} ${this.color}`;
          }
        }

        class Car extends Vehicle {
          getBrandModel() {
            return `${super.getBrandModel()} called based class function from child class.`;
          }
        }

        let car1 = new Car("Honda", "SUV", "Blue");
        let car2 = new Car("Honda", "SUV", "Blue");
        let car3 = new Car("Honda", "SUV", "Blue");
        console.log(car1.getBrandModel());
        console.log(car2.getBrandModel());
        console.log(car3.getBrandModel());