const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [];

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(()=>{
    result.style.WebkitAnimation="fadeIn 1s";
    result.style.animation="fadeIn 1s";
    setTimeout(()=>{
      qna.style.display="none";
      result.style.display="block";
    },450)})
  console.log(select);
  calResult();
}
function calResult(){
  var pointArray = [
    {name : 'istj' , value:0 , key:0},
    {name : 'istp' , value:0 , key:1},
    {name : 'isfj' , value:0 , key:2},
    {name : 'isfp' , value:0 , key:3},
    {name : 'intj' , value:0 , key:4},
    {name : 'intp' , value:0 , key:5},
    {name : 'infj' , value:0 , key:6},
    {name : 'infp' , value:0 , key:7},
    {name : 'estj' , value:0 , key:8},
    {name : 'estp' , value:0 , key:9},
    {name : 'esfj' , value:0 , key:10},
    {name : 'esfp' , value:0 , key:11},
    {name : 'entj' , value:0 , key:12},
    {name : 'entp' , value:0 , key:13},
    {name : 'enfj' , value:0 , key:14},
    {name : 'enfp' , value:0 , key:15},
    
  ]
  for (let i =0;i<endPoint;i++){
    let ie,sn,tf,jp = 0;
    var target = qnaList[i].a[select[i]];
    
  }
  var resultArray = pointArray.sort(function (a,b){
    if(a.value>b.value){
      return -1;
    }
      if(a.value<b.value){
      return 1;
    }
    return 0;
  });
  let resultword = resultArray[0].key;
  return resultword;
}

function addAnsButton(answerText,qIdx,idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3')
  answer.classList.add('py-3')
  answer.classList.add('mx-auto')
  answer.classList.add('fadeIn')
  a.appendChild(answer);
  answer.innerHTML = answerText;
  answer.addEventListener("click",function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i<children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation="fadeOut 0.5s";
      children[i].style.animation="fadeOut 0.5s";
    }
    setTimeout(()=>{
      select[qIdx] = idx;
      for(let i = 0; i<children.length; i++){
        children[i].style.display='none';
      }
      goNext(++qIdx);
    },450)
  },false)
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnsButton(qnaList[qIdx].a[i].answer,qIdx,i);
  }
  var status=document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(()=>{
    qna.style.WebkitAnimation="fadeIn 1s";
    qna.style.animation="fadeIn 1s";
    setTimeout(()=>{
      main.style.display="none";
      qna.style.display="block";
    },450)
    let qIdx = 0;
    goNext(qIdx);
  },450)
  
}