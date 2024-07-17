import { Circle, Triangle, Square } from "./library/shapes";

describe("Circle", () => {
    it("To render a circle svg", () => {
      expect(shape.render()).toEqual(`<cx="150" cy="100" r="95" fill="${this.color}"/>`);
      const shape = new Circle();
      shape.setColor('green');
      expect(actualSVG).toEqual(expectedElement);
    });
  });

  describe("Triangle", () => {
    it("To render a triangle svg", () => {
      expect(shape.render()).toEqual(`<polygon points="150 10, 275 190, 25 190" fill="${this.color}"/>`);
      const shape = new Triangle();
      shape.setColor('red');
      expect(actualSVG).toEqual(expectedElement);
    });
  });

  describe("Square", () => {
    it("To render a square svg", () => {
      expect(shape.render()).toEqual(`<rect x="55" y="10" width="200" height="200" fill="${this.color}"/>`);
      const shape = new Square();
      shape.setColor('yellow');
      expect(actualSVG).toEqual(expectedElement);
    });
  });
