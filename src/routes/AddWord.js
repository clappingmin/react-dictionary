import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';
import Header from '../components/Header';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../store';

function AddWord({ addWord }) {
  const wordRef = useRef('');
  const pinyinRef = useRef('');
  const meaningRef = useRef('');
  const examRef = useRef('');
  const interpretationRef = useRef('');

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const word = String(wordRef.current.value);
    const pinyin = String(pinyinRef.current.value);
    const meaning = String(meaningRef.current.value);
    const exam = String(examRef.current.value);
    const interpretation = String(interpretationRef.current.value);

    // if (
    //   word === '' ||
    //   pinyin === '' ||
    //   meaning === '' ||
    //   exam === '' ||
    //   interpretation === ''
    // ) {
    //   alert('아직 입력하지 않은 항목이 있습니다.');
    //   return;
    // }

    const wordObj = {
      word: word,
      pinyin: pinyin,
      meaning: meaning,
      exam: exam,
      interpre: interpretation,
    };

    addWord(wordObj);
    navigate('/');
  };

  return (
    <>
      <Header>단어장</Header>
      <Container>
        <form onSubmit={onSubmit}>
          <input placeholder="단어" ref={wordRef}></input>
          <input placeholder="병음" ref={pinyinRef}></input>
          <input placeholder="의미" ref={meaningRef}></input>
          <input placeholder="예문" ref={examRef}></input>
          <input placeholder="해석" ref={interpretationRef}></input>
          <button>추가하기</button>
        </form>
      </Container>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addWord: (text) => {
      dispatch(add(text));
    },
  };
}

export default connect(null, mapDispatchToProps)(AddWord);
