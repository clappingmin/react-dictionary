import styled from 'styled-components';
// 리액트 아이콘
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
import { useEffect, useState } from 'react';

// 리덕스
import { connect } from 'react-redux';
import { color, updateColorFB } from '../store';

import { db } from '../firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';

function Card({ voca, colorWord }) {
  const { word, pinyin, meaning, exam, interpre } = voca;
  let { clicked } = voca;

  const [color, setColor] = useState(clicked);

  function onClick() {
    setColor(!clicked);
    colorWord(voca);
  }

  return (
    <Container style={{ background: color ? 'rgb(230, 125, 154)' : '#fff' }}>
      <div className="top">
        <div className="title" style={{ color: color ? '#fff' : '#000' }}>
          {word}
        </div>
        <div className="btn">
          <GiCheckMark
            size="20"
            onClick={onClick}
            color={color ? '#fff' : 'rgb(230, 125, 154)'}
          />

          <BsPencilSquare
            size="20"
            color={color ? '#fff' : 'rgb(230, 125, 154)'}
          />

          <BsTrashFill
            size="20"
            color={color ? '#fff' : 'rgb(230, 125, 154)'}
          />
        </div>
      </div>
      <div className="pinyin" style={{ color: color ? '#fff' : '#000' }}>
        [{pinyin}]
      </div>
      <div className="mean" style={{ color: color ? '#fff' : '#000' }}>
        {meaning}
      </div>
      <div
        className="example"
        style={{ color: color ? '#fff' : 'rgb(61, 131, 211)' }}
      >
        {exam}
      </div>
      <div
        className="interpretation"
        style={{ color: color ? '#fff' : 'rgb(61, 131, 211)' }}
      >
        {interpre}
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 160px;
  max-height: 385px;
  border: 3px solid rgb(230, 125, 154);
  border-radius: 10px;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  font-size: 15px;
  line-height: 25px;
  transition-duration: 0.5s;

  &:hover {
    box-shadow: 10px 10px 30px;
  }

  .top {
    width: 100%;
    height: 25%;
    display: flex;

    .title {
      height: 100%;
      width: 80%;
      font-size: 25px;
      word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
      word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
      overflow: hidden;
    }
    .btn {
      height: 100%;
      width: 20%;
      display: flex;
      justify-content: space-between;
      padding: 0 px;

      button {
        background-color: transparent;
      }
    }
  }

  .pinyin {
    height: 25%;
    width: 100%;
    word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
    word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
    overflow: hidden;
  }
  .mean {
    height: 25%;
    width: 100%;
    word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
    word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
    overflow: hidden;
  }
  .example {
    height: 25%;
    width: 100%;
    font-size: 12px;
    color: rgb(61, 131, 211);
    word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
    word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
    overflow: hidden;
  }
  .interpretation {
    height: 25%;
    width: 100%;
    font-size: 12px;
    color: rgb(61, 131, 211);
    word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
    word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
    overflow: hidden; // 영역을 벗어나는 글자는 안보이게 해준다.
  }
`;

function mapDispatchToProps(dispatch) {
  return {
    colorWord: (voca) => {
      dispatch(updateColorFB(voca));
    },
  };
}

export default connect(null, mapDispatchToProps)(Card);
