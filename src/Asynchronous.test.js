//异步测试代码

// 回调
test('the data is peanut butter', (done) => {
  // 确保一个断言
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});

//承诺
it('test pro',()=>{
  return fetchProData().then(data=>{
    expect(data).toBe('pro');
  })
})

// async
it('test async',async()=>{
  const data = await fetchProData();
  expect(data).toBe('pro');
})



//---延时
function fetchData(callBack){
  setTimeout(() => {
    callBack('peanut butter');
  }, 1000);
}

//--承诺
function fetchProData(){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve('pro');
    }, 1000);
  })
}