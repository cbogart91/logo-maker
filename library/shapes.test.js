const { Circle, Triangle, Square } = require ("./shapes.js");

describe("Circle", () => {
    it("should render a circle svg", () => {
      const shape = new Circle();
      shape.setColor('green');
      const expectedSVG = `<circle="150" cy="100" r="95" fill="green"/>`;
      expect(shape.render()).toEqual(expectedSVG);
    });
  });

  describe("Triangle", () => {
    it("should render a triangle svg", () => {
      const shape = new Triangle();
      shape.setColor('red');
      const expectedSVG = `<polygon points="150 10, 275 190, 25 190" fill="red"/>`;
      expect(shape.render()).toEqual(expectedSVG);
    });
  });

  describe("Square", () => {
    it("should render a square svg", () => {
      const shape = new Square();
      shape.setColor('yellow');
      const expectedSVG = `<rect x="55" y="10" width="200" height="200" fill="yellow"/>`;
      expect(shape.render()).toEqual(expectedSVG);
    });
  });
