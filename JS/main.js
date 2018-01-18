function $(selector){
  return document.querySelector(selector)
}
function $$(selector){
  return document.querySelectorAll(selector)
}
$('.header .userLogo').onclick=function(e){
  e.stopPropagation()//阻止事件传播
  $('.popBox').style.display="block"
}
$('.popBox').addEventListener('click',function(e){
  e.stopPropagation()//阻止事件传播
  if(e.target.classList.contains('login')){
    $('.popBox').classList.add('login')
    $('.popBox').classList.remove('register')
  }
  if(e.target.classList.contains('register')){
    $('.popBox').classList.add('register')
    $('.popBox').classList.remove('login')
  }
  if(e.target.classList.contains('close')){
    $('.popBox').style.display="none"
  }
})
document.addEventListener('click',function(e){
  $('.popBox').style.display="none"
})
$('.model.login form').addEventListener('submit',function(e){
  e.preventDefault()
  if(!/^\w{3,8}$/.test($('.model.login input[name=username]').value)){
    $('.login .errormsg').innerText = "请输入3-8位由数字字母下划线组成的用户名"
    return false
  }
  if(!/^\w{6,10}$/.test($('.model.login input[name=password]').value)){
    $('.login .errormsg').innerText = "请输入6-10位由数字字母下划线组成的密码"
    return false
  }
  this.submit()
})

$('.model.register form').addEventListener('submit',function(e){
  e.preventDefault()
console.log($('.model.register .errormsg'))
  if(!/^\w{3,8}$/.test($('.model.register input[name=username]').value)){
    $('.model.register .errormsg').innerText = "请输入3-8位由数字字母下划线组成的用户名"
    return false
  }
  if(!/^\w{6,10}$/.test($('.model.register input[name=password]').value)){
    $('.model.register .errormsg').innerText = "请输入6-10位由数字字母下划线组成的密码"
    return false
  }
  if($('.model.register input[name=password]').value !=$('.model.register input[name=password1]').value){
    $('.model.register .errormsg').innerText = "两次密码不匹配"
    return false
  }
  this.submit()
})