//https://escape-room.hexschool.io/api/user/signup
// axios post 範例
/*
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/
const account = document.querySelector('.account');
const password = document.querySelector('.password');
const send = document.querySelector('.send');

console.log(account,password,send);

send.addEventListener('click',function(e){
  callSignUp();
});

  function callSignUp(){
    //加入輸入欄位不得為空的判斷
    if(account.value==""||password.value==""){
      alert("這是必填項目");
      return;
    };
    let obj = {};
    obj.email = account.value;
    obj.password = password.value;
    // 小步測試obj
    // console.log(obj);
  
  axios.post('https://escape-room.hexschool.io/api/user/signup', obj)
    .then(function (response) {
      // 小步測試功能
      // console.log(response);
      if(response.data.message=="帳號註冊成功"){
        alert("恭喜帳號註冊成功");
      }else{
        alert("帳號註冊失敗，請再嘗試");
      }
      //送出後清空資料
      account.value="";
      password.value="";
    })
    .catch(function (error) {
      // 小步測試功能
      // console.log(error);
      alert("帳號註冊失敗");
    });
  };