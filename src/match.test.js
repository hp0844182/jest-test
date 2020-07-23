//匹配器
describe('matcher',()=>{
  //---相等匹配
  //toBe
  test('tobe',()=>{
    expect(2+2).toBe(4);
  })

  // toEqual(deep equality)
  it('toEqual',()=>{
    const a = {a:1}
    expect(a).toEqual({a:1})
  })

  it('toEqual2',()=>{
    const a = {a:{a:1}}
    expect(a).toEqual({a:{a:1}});
  })

  //---真实性匹配
  it('toBeNull', () => {
    const a = null;
    expect(a).toBeNull();
  });

  it('toBeUndefined', () => {
    const a = undefined;
    expect(a).toBeUndefined();
  });

  it('defined',()=>{
    const a = null;
    expect(a).toBeDefined();
  })

  //---数值匹配
  it('number compare',()=>{
    const val = 4;
    expect(val).toBeGreaterThan(3);
    expect(val).toBeGreaterThanOrEqual(4);
    expect(val).toBeLessThan(5);
    expect(val).toBeLessThanOrEqual(4);
  })

  it('toBeClose', () => {
    const a = 0.1+0.2;
    expect(a).toBeCloseTo(0.3);
  });

  //字符匹配
  test('there is no I in team', () => {
    expect('team').not.toMatch(/i/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  //contain 数组or字符串都可
  test('toContain',()=>{
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ];
    expect(shoppingList).toContain('beer');
  })

  //---异常匹配
  it('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });
})

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}