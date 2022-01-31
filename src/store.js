import { configureStore, createSlice } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  collection,
  doc,
  getDoc,
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
    console.log('hi!');

    let word_list = [];

    // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
    word_data.forEach((w) => {
      // 콘솔로 확인해요!
      // console.log(w.id, w.data());
      word_list.push({ id: w.id, ...w.data() });
    });

    // 잘 만들어졌는 지 리스트도 확인해봐요! :)
    console.log(word_list);
    dispatch(load(word_list));
  };
};

// 데이터 추가하기
export const addWordFB = (load) => {
  return async function (dispatch) {
    // 파이어스토어에 추가하기를 기다려요!
    const docRef = await addDoc(collection(db, 'word'), load);

    // 추가한 데이터 중 id를 가져와서 bucket_data를 만들어줬어요!
    const load_data = { id: docRef.id, ...load };
    // 그럼 이제 액션을 일으키자! (수정해달라고 요청하자!)
    dispatch(add(load_data));
  };
};

// 데이터 수정하기
export const updateColorFB = (word) => {
  return async function (dispatch, getState) {
    console.log('3');
    // 수정할 도큐먼트를 가져오고,
    const docRef = doc(db, 'word', word.id);
    // 수정합시다!
    await updateDoc(docRef, { clicked: !word.clicked });
    // getState()를 사용해서 스토어의 데이터를 가져올 수 있어요.
    console.log(getState());

    dispatch(color(word.id));
  };
};

const voca = createSlice({
  name: 'vocaReducer',
  initialState: [],
  reducers: {
    load: (state, action) => action.payload,
    add: (state, action) => [{ ...action.payload }, ...state],
    color: (state, action) => {
      state.map((word) => {
        if (word.id === action.payload) word.clicked = !word.clicked;
      });
    },
  },
});

const store = configureStore({ reducer: voca.reducer, enhancer });

export const { load, add, color } = voca.actions;

export default store;
