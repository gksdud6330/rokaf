const qnaList = [
  {
    q: '1. 혼자 여행 오게 된 낯선 장소, 이런 곳에서 나는', //I,E 1
    a: [
      { answer: 'a. 혼자 조용히 여행을 즐긴다.', type: 'I' },
      { answer: 'b. 여행 중 만난 사람들과 쉽게 친해진다.', type: 'E' },
    ]
  },
  {
    q: '2. 여행 중 탄 버스 안에 마음에 드는 이상형이 있다. 어쩌다 대화를 시작한 나는 ', //F,T 1
    a: [
      { answer: 'a. 풍부한 공감과 리액션을 해준다.', type: 'F' },
      { answer: 'b. 이것저것 궁금한 것을 질문한다.', type: 'T' },
    ]
  },
  {
    q: '3. 여행에 필요한 짐을 쌀 때 나는', //P,J 1
    a: [
      { answer: 'a. 하루 전 부랴부랴 짐을 싼다.', type: 'P' },
      { answer: 'b. 여행 일주일 전부터 챙길 물건 목록을 적고 구비해 놓는다.', type: 'J' },
    ]
  },
  {
    q: '4. 오늘 여행을 마치고 자기 전, 친구에게 전화가 왔다. 나는', //S,N 1
    a: [
      { answer: 'a. 구체적으로 있었던 일들을 얘기한다. ', type: 'S' },
      { answer: 'b. 여행을 하며 느낀점, 통찰에 대해 얘기한다. ', type: 'N' },
    ]
  },
  {
    q: '5. 호스텔 룸메이트가 오늘 여행 중 다쳤다고 얘기를 한다. 나는', //F,T 2
    a: [
      { answer: 'a. 내가 다친 것처럼 공감하며 걱정을 한다', type: 'F' },
      { answer: 'b. 어쩌다 다쳤는지 물어보고 근처 약국을 찾아봐준다', type: 'T'},
    ]
  },

  {
    q: '6. 여행 중 만난 친구가 맛집을 추천해달라고 한다. 나는,', //S,N 2
    a: [
      { answer: 'a. 숙소에서부터 가는 법을 알려준다', type: 'S' },
      { answer: 'b. 식당 옆에 있는 랜드마크를 알려준다', type: 'N'},
    ]
  },
  {
    q: '7. 호스텔에서 진행중인 파티에 참여한 나는', //I,E 2
    a: [
      { answer: 'a. 묵묵히 사람들의 이야기를 듣는다.', type: 'I' },
      { answer: 'b. 대화를 주도하며 분위기를 이끈다.', type: 'E' },
    ]
  },
  
  
  {
    q: '8. 예매해 둔 버스를 타러 가던 중, 신기한 장소를 발견한 나는', //P,J 2
    a: [
      { answer: 'a. 일정에 무리가 있더라도 궁금하니까 간다.', type: 'P' },
      { answer: 'b. 아무리 궁금해도 일정에 무리가 간다면 포기한다.', type: 'J' },
    ]
  },
  {
    q: '9. 여행중, 호스텔에서 가볍게 인사만 했던 사람과 우연히 마주친 나는', //I,E 3
    a: [
      { answer: 'a. 자연스럽게 지나친다.', type: 'I' },
      { answer: 'b. 자연스럽게 다가가서 인사한다.', type: 'E' },
    ]
  },

  {
    q: '10. 여행지에서 길을 잃었을 때 나는 ', //S,N 3
    a: [
      { answer: 'a. 왔던 길을 되돌아 간다. ', type: 'S' },
      { answer: 'b. 앞으로만 가도 어디든 도착하겠지.. 무작정 걷는다.', type: 'N' },
    ]
  },
    {
    q: '11. 여행지를 걷던 중 맛있어 보이는 음식점을 발견한 나는 ', //P,J 3
    a: [
      { answer: 'a. 무작정 들어가서 시키고 본다.', type: 'P' },
      { answer: 'b. 구글 지도를 켜서 평점, 리뷰를 확인한다.', type: 'J' },
    ]
  },
  {
    q: '12. 여행 중 만난 친구가 나에게 힘들어 보인다며 아이스크림을 하나 건넨다. ', //F,T 3
    a: [
      { answer: 'a. 완전 감동하며 고맙다고 전한다.', type: 'F' },
      { answer: 'b. 사줘서 고맙긴 한데, 내가 힘들어 보였다고? 라고 생각한다.', type: 'T' },
    ]
  }
]

const infoList = [
  {
    name: '넌 뭐하고 싶어? <ㅇㅇㅇ>',
    desc: '같이 가는 일행들에게 뭐하고 싶은지 물어본다. ',
    key:'ENFJ'
  },
  {
    name: '하고픈게 너무 많아 <ㅇㅇㅇ>',
    desc: '여행가서 이것도 하고 싶고 저것도 하고 싶어하는 타입. ',
    key:'ENFP'
  },
  {
    name: '역할 분담 철저 <조장>',
    desc: '내가 숙소 예약할게 너가 맛집 찾아줘',
    key:'ENTJ'
  },
  {
    name: '목적지만 정하고 보는 <송강호>',
    desc: '무계획도 계획이다. 일단 어디 갈지만 정해.',
    key:'ENTP'
  },
  {
    name: '같이 여행 갈 사람을 모으는 <인싸!>',
    desc: '혼자 갈거면 안 가고 말지! 가고 싶은 곳 생기면 바로 친구들 연락을 돌리는 타입.',
    key:'ESFJ'
  },
  {
    name: '계획은 모르겠고 일단 신나하는 <뿡뿡이>',
    desc: '오 ~~~ 저기 좋아보이는데? 개재밌겠다 가즈ㅏㅏ !!!',
    key:'ESFP'
  },
  {
    name: '나만 믿어 <프로젝트 매니저>',
    desc: '전체적으로 여행을 어디서 어떻게 할 건지 구성하는 타입.',
    key:'ESTJ'
  },
  {
    name: '옷부터 <인스타그래머>',
    desc: '일단 여행가서 입을 옷부터 사는 타입',
    key:'ESTP'
  },
  {
    name: '주어진 정보를 잘 종합하는 <ㅇㅇㅇ>',
    desc: '친구들과의 여행 단톡방에서 이러쿵 저러쿵 말하는 정보들을 잘 종합하는 타입. 친구들이 좋아한다.',
    key:'INFJ'
  },
  {
    name: '이상적인 휴가를 추구하는 <몽상가>',
    desc: '머릿 속으로 이상적인 휴가를 그려보고, 그걸 실천하려고 하는 타입.',
    key:'INFP'
  },
  {
    name: '여행지 조사 만렙 <박사>',
    desc: '각 여행지 별 특성들을 샅샅이 조사한 후 여행지를 결정하는 타입. 계획도 야무지게 짤 가능성이 높다.',
    key:'INTJ'
  },
  {
    name: '궁금증을 해결하러 여행 가는 <물음표>',
    desc: '오 여기 TV에서 보고 어떻게 지어졌는지 궁금했는데.. 가서 확인해봐야지.. 헤헤..',
    key:'INTP'
  },
  {
    name: '난 어디든 다 좋아 <일단 말해봐>',
    desc: '캠핑하고 싶다고? 야경 보고 싶다고? 그래 가자 ~!',
    key:'ISFJ'
  },
  {
    name: '가자하면 감 <가면감>',
    desc: '가자하면 가는데 딱히 나서서 계획은 안 세우는 타입. ',
    key:'ISFP'
  },
  {
    name: '일 단위, 시간 단위 계획을 짜는 <엑셀>',
    desc: '계획 없이 돌아다니는 건 너무 무모하다고 생각하는 타입. 1시간 단위로 쪼개진 시간표를 가지고 여행할 가능성이 높다. ',
    key:'ISTJ'
  },
  {
    name: '여행은 장비빨 <지르고바>',
    desc: '이 정도는 여행할 때 없으면 안되지 ~',
    key:'ISTP'
  }
]