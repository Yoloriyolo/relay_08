# Relay08 프로젝트

📆일시: 2020-07-31

👨‍👩‍👦‍👦기획: J055 김진성, J050 김은빈, J052 김종원, J056 김창윤, J053 김종은, J051 김정환, J054 김진관, J059 김학준, J057 김태은, J058 김하균, J060 김해람



## 주제

'아이러브스쿨'을 현대화에 맞게 개선하자!



## 전체적인 시나리오

1. 내 정보를 등록한다.
2. 내 정보를 토대로 비슷한 사람들을 추천해준다.
3. 사용자들이 쓴 사연(글)들을 개체명 인식을 통하여 카테고리(ex: 마치 hash tag 처럼 OO초등학교, 서울 등)화 한다.
4. 사진으로 찾을 때는 찾고자 하는 사람의 사진을 업로드 했을 때 이 사진과 유사한 사진을 프로필 사진으로 설정한 사람들을 추천해준다.
5. 혹은 나이 변환을 원한다면 해당 사진의 현재 나이와 변환할 나이를 입력한 후 변환시킨다. 변환시킨 사진으로도 찾을 수 있게 한다.



### 시스템 흐름도

------

![system](./img/system.png)



## 기능

### 공통기능

1. 자기 소개 기능(ex: 아키네이터, 구글 설문지 등)
2. 사연(글) 쓰는 기능 - 자연어 처리
3. 사진으로 사람 찾기 기능 - 컴퓨터비전

### 컴퓨터 비전

1. 사진을 업로드하여 몇 십년전 모습 또는 몇 십년 후의 모습을 보여준다.
2. 사진을 올려서 비슷한 사람을 찾는다. (우리 서비스에 가입해있고 프로필 사진을 올렸다는 가정)

### 자연어 처리

1. 사용자들이 올린 사연(글)을 키워드를 추출하여 카테고리화 해준다.

### 테이블 값 데이터

1. 사람을 찾기전에 내 정보 입력에서 받은 데이터들을 이용해서 테이블화 하고 이 것을 추천 알고리즘을 통해 사용자에게 미리 추천 해준다.



## 세부사항

### 내 정보 입력 기능

필요한 input 값들

1. 이름 🎈
2. 성별 🎈
3. 나이
4. 학교 (세분화해서 초,중,고,대 입력 받을 수 있도록) 🎈
5. 지역 (학교별로 나눠서 지역설정 가능하도록)
6. 별명
7. 연락처 🎈
8. 내 사진 업로드
9. 취미
10. 취향 같은 것들 (ex: 어떤 음식 좋아하고, 어떤 운동 좋아하고 등등)
11. 🎈**이 외 필요한거 넣으십시오!!!🎈**

[테이블 구성 예시](https://www.notion.so/30ed8a909461461cbeb53007b3b3deec)

***질문 생성 예시***

'독서' 속성을 예로들면 질문을 할 때 '책을 얼마나 좋아합니까? 아주 싫다 1 아주 좋다 5'로 입력을 받도록 합니다!

***어떻게 하면 좋을까요?***

추천 하기전에 학교, 지역 등으로 먼저 구별하고 취향 데이터(독서, 야외 활동 등)를 이용하여 추천 알고리즘을 통해 추천해주도록 합니다.



### 사연(글) 쓰기 기능

---

![board](./img/board.png)

게시판 예시

1. 사용자들이 사연(글)을 쓴다.
2. 개체명 인식을 통해서 키워드들을 추출한다.
3. 사연들을 카테고리화 한다.
4. 사연들도 확인할 수 있다.
5. 예시는 예시일뿐 마음대로 바꾸셔도 상관없습니다!

---

### 사진으로 사람 찾기 기능

1. 찾고자 하는 사람의 사진을 업로드한다.
2. 사진상의 나이를 입력하도록 한다.
3. 변환하고자 하면 변환할 나이를 입력하도록 한다.
4. 사진과 유사한 사람들의 사진을 찾는
5. 가장 유사한 사람부터 보여준다.





## 참고사항

- 아키네이터: [https://kr.akinator.com/](https://kr.akinator.com/)
- 얼굴비교: [https://docs.aws.amazon.com/ko_kr/rekognition/latest/dg/faces-comparefaces.html](https://docs.aws.amazon.com/ko_kr/rekognition/latest/dg/faces-comparefaces.html)
- 개체명 인식: [https://keep-steady.tistory.com/20](https://keep-steady.tistory.com/20)
- 인공지능 API 관련: [http://aiopen.etri.re.kr/service_api.php](http://aiopen.etri.re.kr/service_api.php)
