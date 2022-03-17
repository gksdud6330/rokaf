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
      { answer: 'a. 여행 일주일 전부터 챙길 물건 목록을 적고 구비해 놓는다.', type: 'J' },
      { answer: 'b. 하루 전 부랴부랴 짐을 싼다.', type: 'P' },
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
    name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! '
  },
  {
    name: '난 너만 봐, 정직한 연애 스타일의 <소>',
    desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
  },
  {
    name: '야 사귀자, 사랑을 쟁취하는 <호랑이>',
    desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
  },
  {
    name: '이건 어때? 난 어때? 독특한 매력을 가진 <토끼>',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  {
    name: '결혼은 언제쯤 할까 신혼여행은 어디로?, 이상적인 연애관의 소유자 <용>',
    desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
  },
  {
    name: '기념일에 무슨 이벤트 할까, 이벤트 플래너 <뱀>',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: '어 오늘 머리 바꿨네 잘 어울린다, 센스가 뛰어난 <말>',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: '난 너랑 하는 것들 다 좋아, 순종적인 <양>',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: '난 당신의 연예인, 끼가 넘치는 재주꾼 <원숭이>',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '이건 이거고 저건 저거지 , 공과사 확실한 <닭>',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: '난 네가 좋아 너무 좋아, 애교만땅 <개>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  {
    name: '산은 산이요 연애는 연애로다, 느긋하고 온순한 <돼지>',
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]