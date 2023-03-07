const { Circle } = require('./sharp');

describe('Circle', () => {
  it('should return an SVG circle element with the specified color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toBe('<circle cx="100" cy="90" r="80"  fill="blue" />');
  });
});