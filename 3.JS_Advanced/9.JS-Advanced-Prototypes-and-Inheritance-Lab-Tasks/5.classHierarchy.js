function Hierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
            // Prevent instantiation of this abstract class
            if (new.target === Figure) {
                throw new TypeError('Figure class is abstract');
            }
        }

        changeUnits(value) {
            this.units = value;
        }

        scaleParam(param) {
            switch (this.units) {
                case 'm':
                    return param / 10; // Adjusted from your original code for correct scaling
                case 'cm':
                    return param; // No change needed
                case 'mm':
                    return param * 10; // Scale up for mm
                default:
                    return param; // Default case, though not strictly necessary
            }
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units = 'cm') {
            super(units);
            this._radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        get radius() {
            return this.scaleParam(this._radius);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units = 'cm') {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            return this.width * this.height;
        }

        get width() {
            return this.scaleParam(this._width);
        }

        get height() {
            return this.scaleParam(this._height);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return { Figure, Circle, Rectangle };
}