import { configureStore, createSlice } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from './firebase';

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

// 데이터 가져오기
export const loadWordFB = () => {
  return async function (dispatch) {
    // 데이터를 가져와요!
    const word_data = await getDocs(collection(db, 'word'));

    let word_list = [];

    // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
    word_data.forEach((w) => {
      // 콘솔로 확인해요!
      // console.log(w.id, w.data());
      word_list.push({ id: w.id, ...w.data() });
    });

    // 잘 만들어졌는 지 리스트도 확인해봐요! :)
    dispatch(load(word_list));
  };
};

// 데이터 추가하기
export const addWordFB = (word) => {
  return async function (dispatch) {
    // 파이어스토어에 추가하기를 기다려요!
    const docRef = await addDoc(collection(db, 'word'), word);
  };
};

// 데이터(색상) 수정하기
export const updateColorFB = (word) => {
  return async function (dispatch, getState) {
    // 수정할 도큐먼트를 가져오고,
    const docRef = doc(db, 'word', word.id);
    // 수정합시다!
    await updateDoc(docRef, { clicked: !word.clicked });
    // getState()를 사용해서 스토어의 데이터를 가져올 수 있어요.
    console.log(getState());

    dispatch(color(word.id));
  };
};

export const updateWordFB = (word) => {
  return async function (dispatch, getState) {
    // 수정할 도큐먼트를 가져오고,
    const docRef = doc(db, 'word', word.id);
    // 수정합시다!

    await updateDoc(docRef, word);
  };
};

// 데이터 삭제하기
export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    if (!word_id) {
      window.alert('아이디가 없네요!');
      return;
    }
    const docRef = doc(db, 'word', word_id);
    await deleteDoc(docRef);

    window.location.replace('/'); // 새로고침
  };
};

const voca = createSlice({
  name: 'vocaReducer',
  initialState: [],
  reducers: {
    load: (state, action) => action.payload,
    color: (state, action) => {
      state.map((word) => {
        if (word.id === action.payload) word.clicked = !word.clicked;
      });
    },
  },
});

const store = configureStore({ reducer: voca.reducer, enhancer });

export const { load, color } = voca.actions;

export default store;
