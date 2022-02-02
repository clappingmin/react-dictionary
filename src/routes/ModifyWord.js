// css
import styled from 'styled-components';
import Header from '../components/Header';
import Container from '../components/Container';

import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// 리덕스, 파이어베이스
import { connect } from 'react-redux';
import { updateWordFB } from '../store';

function ModifyWord({ updateWord }) {
  const wordRef = useRef('');
  const pinyinRef = useRef('');
  const meaningRef = useRef('');
  const examRef = useRef('');
  const interpretationRef = useRef('');

  const navigate = useNavigate();

  // Card.js 42번째 라인에서 보낸 데이터 받기
  const location = useLocation();
  const voca = location.state;
  const { word, pinyin, meaning, exam, interpre, id } = voca;

  function onSubmit(e) {
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
      clicked: false,
      id,
    };

    updateWord(wordObj);
    navigate('/');
  }

  return (
    <>
      <Link to="/">
        <Header>안뇽 단어장</Header>
      </Link>
      <Container>
        <Wordbox>
          <h1>단어 수정하기</h1>
          <form onSubmit={onSubmit}>
            <Input>
              <label>단어</label>
              <input ref={wordRef} defaultValue={word}></input>
            </Input>
            <Input>
              <label>병음</label>
              <input ref={pinyinRef} defaultValue={pinyin}></input>
            </Input>
            <Input>
              <label>의미</label>
              <input ref={meaningRef} defaultValue={meaning}></input>
            </Input>
            <Input>
              <label>예문</label>
              <input ref={examRef} defaultValue={exam}></input>
            </Input>
            <Input>
              <label>해석</label>
              <input ref={interpretationRef} defaultValue={interpre}></input>
            </Input>
            <button>수정하기</button>
          </form>
        </Wordbox>
      </Container>
    </>
  );
}

const Wordbox = styled.div`
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
    updateWord: (voca) => {
      dispatch(updateWordFB(voca));
    },
  };
}

export default connect(null, mapDispatchToProps)(ModifyWord);
