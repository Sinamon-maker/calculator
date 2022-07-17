const counter = require('../counter')

describe('counter', () => {
  it('should multiply if operator is multply', () => {
    const result = counter.count('2', '8', '*')
    expect(result).toBe(16)
  })

  it("should devide if operator is del", () => {
    const result = counter.count("8", "4", "/");
    expect(result).toBe(2);
  });

  it("should minus if operator is minus", () => {
    const result = counter.count("5", "2", "-");
    expect(result).toBe(3);
  });

   it("should count if operator is plus", () => {
     const result = counter.count("5", "2", "+");
     expect(result).toBe(7);
   });

    it("should return 'Ops, something wrong'", () => {

      expect(() => {
        counter.count("5", "2", "5").toThrow("Ops, something wrong");
      })
    });
})