# 안뇽 단어장

## 개발 기간

2022.01.29 - 2022.02.02

## 사용 기술 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>

## 기능

✅ 게시글 목록 페이지

- [x] 게시글 목록을 화면에 그리기 (각각 뷰는 카드 뷰로 만들기)
- [x] 게시글 내의 예시는 파란 글씨로 보여주기
- [x] 게시글 목록을 리덕스에서 관리하기
- [x] 게시글 목록을 파이어스토어에서 가져오기
- [ ] 무한 스크롤

✅ 게시글 작성 페이지

- [x] 게시글 작성에 필요한 input 3개를 ref로 관리하기
- [x] 작성한 게시글을 리덕스 내 게시글 목록에 추가하기
- [x] 게시글 목록을 파이어스토어에 저장하기

✅ 추가 기능

- [x] 단어 삭제하기
- [x] 단어 수정하기
- [x] 단어 색상 바꾸기

## 초기설정

```bash
$ yarn create react-app word-list

$ npm i styled-components
$ yarn add react-redux
$ yarn add react-router-dom
$ yarn add @reduxjs/toolkit

# firestore
$ yarn add firebase

# 리덕스 미들웨어
yarn add redux-thunk

# 리액트 아이콘
$ yarn add react-icons

# 무한 스크롤
yarn add react-intersection-observer
```

## 결과

[안뇽 단어장](http://hanghae99-react-voca.s3-website.ap-northeast-2.amazonaws.com/)

|![완성](https://blog.kakaocdn.net/dn/c8Fram/btrspIYzJcx/CRmkKkLgZvcmLD9hHAxFWK/img.gif)|![수정](https://blog.kakaocdn.net/dn/bR7Paj/btrsnm9jVS2/cn7HEFkPXYKt6rHV5KocZk/img.gif)|
|:---|---:|
