import styled from 'styled-components';
// 리액트 아이콘
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
import { useState } from 'react';

// 리덕스
import { connect } from 'react-redux';
import { updateColorFB, deleteWordFB } from '../store';

// 페이지 이동
import { Link } from 'react-router-dom';

function Card({ voca, colorWord, deleteWord }) {
  // 단어 object 비구조화 할당
  const { word, pinyin, meaning, exam, interpre, id } = voca;
  let { clicked } = voca;

  const [color, setColor] = useState(clicked);

  // 색깔 변경
  function onClick() {
    setColor(!clicked);
    colorWord(voca);
  }

  // 단어 삭제
  function onDelete() {
    deleteWord(id);
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

          <Link to={`/word/${id}`} state={voca}>
            <BsPencilSquare
              size="20"
              color={color ? '#fff' : 'rgb(230, 125, 154)'}
            />
          </Link>

          <BsTrashFill
            size="20"
            color={color ? '#fff' : 'rgb(230, 125, 154)'}
            onClick={onDelete}
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
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .btn {
      height: 100%;
      width: 20%;
      display: flex;
      justify-content: space-between;
      padding: 0 px;
      cursor: pointer;

      button {
        background-color: transparent;
      }
    }
  }

  .pinyin {
    height: 25%;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .mean {
    height: 25%;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .example {
    height: 25%;
    width: 100%;
    font-size: 12px;
    color: rgb(61, 131, 211);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .interpretation {
    height: 25%;
    width: 100%;
    font-size: 12px;
    color: rgb(61, 131, 211);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

function mapDispatchToProps(dispatch) {
  return {
    colorWord: (voca) => {
      dispatch(updateColorFB(voca));
    },
    deleteWord: (voca_id) => {
      dispatch(deleteWordFB(voca_id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Card);
