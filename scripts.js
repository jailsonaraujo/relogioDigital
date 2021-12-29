var painel=document.getElementById('painel')
var btn=document.querySelectorAll('button')
var t=setInterval(relogio,1000)

function relogio(){
  var horas=new Date()
  var h = horas.getHours()
  var m = horas.getMinutes()
  var s = horas.getSeconds()

  if(h < 10){
    h = "0"+h
  }else if(m < 10){
    m = "0"+m
  }else if(s < 10){
    s = "0"+s
  }
  painel.innerHTML=h+":"+m+":"+s
}

btn[0].addEventListener('click', function(){
  clearInterval(t)
})
btn[1].addEventListener('click', function(){
  t=setInterval(relogio,1000)
})

document.getElementById('btnLuz').addEventListener('click',function(){
  painel.classList.toggle('luz')
})