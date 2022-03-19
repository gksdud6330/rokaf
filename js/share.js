const url = 'https://mytriptype.ml/';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt; //"ENFP"
  const shareTitle = '나의 여행 유형 테스트 결과';
  for(i=0;i<16;i++) if(infoList[i].key === resultAlt) break;
  const shareDes = infoList[i].name;
  const shareImage = url + 'img/result/' + resultAlt + '.svg';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}