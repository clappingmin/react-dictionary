import styled from 'styled-components';

function Card({ voca }) {
  const {
    word: { word, pinyin, meaning, exam, interpre },
  } = voca;

  console.log(word, pinyin, meaning, exam, interpre);
  return (
    <Container>
      <div className="top">
        <div className="title">{word}</div>
        <div className="btn">
          <button>C</button>
          <button>M</button>
          <button>D</button>
        </div>
      </div>
      <div className="pinyin">[{pinyin}]</div>
      <div className="mean">{meaning}</div>
      <div className="example">{exam}</div>
      <div className="interpretation">{interpre}</div>
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

  .top {
    width: 100%;
    height: 25%;
    display: flex;

    .title {
      height: 100%;
      width: 70%;
      font-size: 25px;
      word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
      word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .btn {
      height: 100%;
      width: 30%;
      display: flex;
      justify-content: space-between;
    }
  }

  .pinyin {
    height: 25%;
    width: 100%;
    word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
    word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mean {
    height: 25%;
    width: 100%;
    word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
    word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .example {
    height: 25%;
    width: 100%;
    font-size: 12px;
    color: rgb(61, 131, 211);
    word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
    word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .interpretation {
    height: 25%;
    width: 100%;
    font-size: 12px;
    color: rgb(61, 131, 211);
    word-wrap: break-word; //가로사이즈나 엘리먼트에 맞춰서 강제 줄바꿈 해줌
    word-break: keep-all; // 한글일 경우 띄어쓰기 기준으로 줄바꿈 해준다.
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default Card;
