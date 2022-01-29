import React, { useRef } from 'react';
// import styled from 'styled-components';
import Header from '../components/Header';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../store';
import styled from 'styled-components';

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

    if (
      word === '' ||
      pinyin === '' ||
      meaning === '' ||
      exam === '' ||
      interpretation === ''
    ) {
      alert('아직 입력하지 않은 항목이 있습니다.');
      return;
    }

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
      <Header>중국어 단어장</Header>
      <Container>
        <Addbox>
          <h1>단어 추가하기</h1>
          <form onSubmit={onSubmit}>
            <Input>
              <p>단어</p>
              <input ref={wordRef}></input>
            </Input>
            <Input>
              <p>병음</p>
              <input ref={pinyinRef}></input>
            </Input>
            <Input>
              <p>의미</p>
              <input ref={meaningRef}></input>
            </Input>
            <Input>
              <p>예문</p>
              <input ref={examRef}></input>
            </Input>
            <Input>
              <p>해석</p>
              <input ref={interpretationRef}></input>
            </Input>
            <button>추가하기</button>
          </form>
        </Addbox>
      </Container>
    </>
  );
}

const Addbox = styled.div`
  height: 450px;
  width: 400px;
  background-color: #fff;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 20px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: rgb(230, 125, 154);
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
      height: 40px;
      width: 200px;
      background-color: rgb(230, 125, 154);
      color: #fff;
      border: none;
      font-size: 20px;
    }
  }
`;

const Input = styled.div`
  width: 100%;
  height: auto;

  input {
    height: 30px;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgb(247, 203, 228);
    font-size: 15px;
    outline: none;
    transition-duration: 0.5s;

    &:focus {
      border-bottom: 2px solid rgb(230, 125, 154);
    }
  }
`;

function mapDispatchToProps(dispatch) {
  return {
    addWord: (text) => {
      dispatch(add(text));
    },
  };
}

export default connect(null, mapDispatchToProps)(AddWord);
