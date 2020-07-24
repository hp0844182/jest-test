//---mock函数
it('test mock', () => {
  const mockFunc = jest.fn();
  forEach([1,0],mockFunc);
  //---被调两次
  expect(mockFunc.mock.calls.length).toBe(2);
  
  //---第一次调用调第一个参数是1
  expect(mockFunc.mock.calls[0][0]).toBe(1);
  expect(mockFunc.mock.calls[1][0]).toBe(0);
});
function forEach(arr,callBack){
  for (let index = 0; index < arr.length; index++) {
    callBack(arr[index],index);
  }
}

const myMock = jest.fn();
console.log(myMock());
// > undefined

