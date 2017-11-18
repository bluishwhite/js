function checkusr() {
  var usr = document.getElementById("user").value;
  var user = document.getElementById("user");
  var reg=/([a-z]|[A-Z])([A-Z]|[a-z]|[0-9]){5,12}$/;
  if(reg.test(usr)){
    user.className = "Right";
  }else{
    user.className = "Error";
    alert("用户名不符合要求");
  }
}
function checkcode() {
  var code = document.getElementById("password").value;
  var password = document.getElementById("password");
  var reg_c=/.{5,12}$/;
  if(reg_c.test(code)){
    password.className = "Right";
  }
  else{
    password.className = "Error";
    alert("密码不符合要求");
  }
}
function checkagain() {
  var acode = document.getElementById("again").value;
  var again = document.getElementById("again");
  var code =document.getElementById("password").value;
  if(code===acode){
    again.className = "Right";
  }
  else{
    again.className= "Error";
    alert("两次密码输入不一致");
    console.log(acode);
  }  
}
function checkemail() {
  var uemail = document.getElementById("email").value;
  var email = document.getElementById("email");
  reg_e= /[^@]*[@]([^@]*)$/;
  if(reg_e.test(uemail)){
    email.className = "Right";
  }
  else{
    email.className= "Error";
    alert("邮箱格式错误");
  }
  
}
function checkphone () {
  var phone = document.getElementById("Phone");
  var phonenum=phone.value;
  reg_p = /[0-9]{11}$/;
  if(reg_p.test(phonenum)){
    phone.className = "Right";
  }
  else{
    alert("请输入正确的号码");
    console.log(phonenum);
  }
}
function submit() {
  var formData = new FormData();
  formData.append("username", "");
  formData.append("password", "");
  var req = new XMLHttpRequest();
  req.open("post", false);
  req.send(formData);
  if (req.status >= 200 && req.status < 400){
    console.log(req.status);
    window.location.href = "index.html";
  }
  else{
    console.log(req.status);
  }
  
}
function register() {
  var form = new FormData();
  form.append("username", "");
  form.append("password", "");
  form.append("phonenumber","");
  form.append("e-mail","");
  var req = new XMLHttpRequest();
  req.open("post", false);
  req.send(form);
  if(req.status>=200 && req.status< 400){
    console.log(req.status);
    window.location.href="index.html";
  }else{
    console.log(req.status);
  }
}
