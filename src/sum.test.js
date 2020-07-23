const sum = require('./sum');

test('1 + 2 return 3', () => {
  expect(sum(1,2)).toBe(3);
});

test('2+2 returns 4',()=>{
  expect(sum(2,2)).toBe(4);
})

