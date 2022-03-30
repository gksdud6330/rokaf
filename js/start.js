const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [];
let mbti = '';
//I,E 0,6,8 / S,N 3,5,9 / F,T 1,4,11 / P,J 2,7,10
function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultName');
  for(i=0;i<4;i++){
    if(infoList[i].key === point) break;
  }
  resultName.innerHTML = infoList[i].name;
  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  resultImg.src = 'img/result/'+point+'.svg';
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);
  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[i].desc;
}
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
  setResult();
}
function calResult(){
  let mbti = '';
  select[0] + select[6] + select[8] < 2 ?  mbti += 'I' : mbti+='E';
  select[3] + select[5] + select[9] < 2 ?  mbti += 'X' : mbti+='X';
  select[1] + select[4] + select[11] < 2 ?  mbti += 'X' : mbti+='X';
  select[2] + select[7] + select[10] < 2 ?  mbti += 'P' : mbti+='J';
  console.log(mbti)
  return mbti;
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