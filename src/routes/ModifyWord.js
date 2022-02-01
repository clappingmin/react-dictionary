import styled from 'styled-components';
import Header from '../components/Header';
import Container from '../components/Container';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadWordFB } from '../store';

function ModifyWord(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(props);

  const wordRef = useRef('word');
  const pinyinRef = useRef('pinyin');
  const meaningRef = useRef('meaning');
  const examRef = useRef('exam');
  const interpretationRef = useRef('interpre');

  function onSubmit(e) {
    e.preventDefault();

    console.log(id);
  }

  return (
    <>
      <Header>중국어 단어장</Header>
      <Container>
        <Wordbox>
          <h1>단어 수정하기</h1>
          <form onSubmit={onSubmit}>
            <Input>
              <label>단어</label>
              <input ref={wordRef}></input>
            </Input>
            <Input>
              <label>병음</label>
              <input ref={pinyinRef}></input>
            </Input>
            <Input>
              <label>의미</label>
              <input ref={meaningRef}></input>
            </Input>
            <Input>
              <label>예문</label>
              <input ref={examRef}></input>
            </Input>
            <Input>
              <label>해석</label>
              <input ref={interpretationRef}></input>
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
    loadWord: () => {
      dispatch(loadWordFB());
    },
  };
}

export default connect(null, mapDispatchToProps)(ModifyWord);
