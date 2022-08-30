export const questionOne = {
    id: 0,
    name: 'gender',
    Q1: `전문가의 성별은 어떻게 되시나요?`,
    answer: ['남자','여자'],
};

export const questionTwo = {
    id: 1,
    name: 'age',
    Q1: `전문가의 나이는 어떻게 되십니까?`,
    answer: ['10대', '20대', '30대', '40대', '50대이상'],
};

export const questionThree = {
    id: 2,
    name: 'career',
    Q1: `전문가의 경력은 어떻게 되십니까?`,
    answer: ['0~4년', '5~9년', '10~14년', '15~20년'],
};
export const questionFour = {
    id: 3,
    name: 'service',
    Q1: `어떤 서비스를 제공 할 수 있으신가요? (대분류)`,
    answer: ['알바','레슨','이벤트','건강&미용','디자인/개발'],
};
export const questionFive = {
    id: 4,
    name: 'category',
    Q1: `어떤 서비스를 제공 할 수 있으신가요? (소분류)`,
    answer: ['편의점 알바','일반음식점 알바','방송스텝&촬영보조 알바','이벤트&행사스텝 알바','포장&조립 알바','배달&택배&퀵 서비스 알바','영화&공연&전시장 알바','사무보조&문서작성 알바','간호조무사&간호사 알바'],
};
export const questionSix = {
    id: 5,
    name: 'category',
    Q1: `어떤 서비스를 제공 할 수 있으신가요? (소분류)`,
    answer: ['방송댄스 레슨','보컬 레슨','골프 레슨','퍼스널트레이닝(PT)','기타 레슨','중국어 과외','비즈니스 영어','수학 과외','영어 과외'],
};
export const questionSeven = {
    id: 6,
    name: 'category',
    Q1: `어떤 서비스를 제공 할 수 있으신가요? (소분류)`,
    answer: ['웨딩 사진 촬영 (본식)','결혼식 사회자','개인용 영상 촬영','영상 편집','댄스 공연','클래식 공연','행사 MC','헤어/메이크업','파티/행사기획'],
};

export const questionEight = {
    id: 7,
    name: 'category',
    Q1: `어떤 서비스를 제공 할 수 있으신가요? (소분류)`,
    answer: ['가족상담','부부/커플상담','성인 상담','아동/청소년 상담','심리검사','언어치료','독서치료','연극치료','네일'],
};
export const questionNine = {
    id: 8,
    name: 'category',
    Q1: `어떤 서비스를 제공 할 수 있으신가요? (소분류)`,
    answer: ['웹사이트 제작','프론트엔드 퍼블리싱','웹사이트 개선 및 버그수정','랜딩 페이지','검색최적화','애널리틱스','데이터 크롤링','데이터 시각화','머신러닝 인공지능'],
};

export const SelectData = {
    id: 0,
    Q1: `희망하는 레슨 지역은 어디십니까?`,
    town: {
        select: '시/군/구',
        option: [
            '강남구',
            '강동구',
            '강북구',
            '강서구',
            '관악구',
            '광진구',
            '구로구',
            '금천구',
            '노원구',
            '도봉구',
            '동대문구',
            '동작구',
            '마포구',
            '서대문구',
            '서초구',
            '성동구',
            '성북구',
            '송파구',
            '양천구',
            '영등포구',
            '용산구',
            '은평구',
            '종로구',
            '중구',
            '중랑구',
        ],
    },
};