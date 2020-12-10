# nyamnyam-client

![](https://user-images.githubusercontent.com/22445243/97938666-4d71d280-1dc5-11eb-8c14-b37efe3ae89c.png)
CodeStates Immersive 22기 7조 growing 팀의 Final-Project 입니다.  
Front - end : 이혁원, 임원동 Back - end : 이한슬(팀장), 권수진      

# Description

디저트 카페, 빵집 사장님 혹은 직원으로서 재고관리를 효율적으로 하고 싶다는 생각이 드신 적 있으신가요?  
nyamnyam은 그런 고민을 덜어들이기 위해 날씨에 따라 디저트 판매량을 예측하고 알려줍니다.  
필요한 것은 꾸준한 매일의 판매수량을 업데이트 하는 것 뿐입니다. 간편한 어플로 효율적인 재고관리를 해보세요  
(추후 웹 개발을 통해 엑셀 등을 통한 대량 업로드도 계획중 입니다.)

# Feature

## Basic

1. 로그인, 회원가입, 매장등록 및 삭제
2. 3일 간(오늘, 내일, 모레)의 날씨에 따른 디저트 판매량 예측
3. 메뉴 관리
   - 가게 메뉴 추가 및 수정, 상세페이지 설정
   - 메뉴 이름, 가격, 추가 설명 수정 및 추가
   - 메뉴 이미지 업로드하기
4. 내 정보 수정 ( 닉네임 및 아바타 이미지 변경, 비밀번호 변경, 회원 탈퇴)
5. 매일의 상품 판매량 업로드

## Advance

1. 소셜 로그인
2. 트랜드 메뉴
   - 전체 메뉴
     - 한국에 모든 가게의 메뉴들을 판매량 순으로 볼 수 있는 탭
     - '디저트 종류' 및 '주재료' 별로 필터링 기능
   - 시그니처 메뉴
     - 한국 내 모든 가게의 시그니처 메뉴들을 볼 수 있는 탭
     - '디저트 종류' 및 '주재료' 별로 필터링 기능
     - 각 메뉴의 가격, 판매 가계, 주재료 확인
3. 상품명, 가게 이름을 기준으로 검색

## Nightmare : 웹

- 엑셀 시트의 가이드라인을 제공하여, 사용자가 업로드 한 엑셀을 즉시 후처리하여 DB에 저장할 수 있도록 하는 기능
- 엑셀 시트 데이터를 후처리하여 데이터베이스에 저장할 수 있는 기능

# Stack

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F842886f6-b3ac-4233-899e-aa1044e3e585%2F_2020-11-01__1.21.05.png?table=block&id=01ac2470-d67d-40d6-a3ca-59d051b47a42&width=1150&userId=6599db97-d5ef-40ad-8ecb-aab699453da7&cache=v2)
-React, React-Native[Expo], React-Navigation, Redux, Redux-Saga, Typescript, styled-component
