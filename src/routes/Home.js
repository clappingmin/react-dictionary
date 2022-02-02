import { useEffect } from 'react';
// 컴포넌트
import styled from 'styled-components';
import Card from '../components/Card';
import Header from '../components/Header';
import { FaPlus } from 'react-icons/fa';
import Container from '../components/Container';

import { Link } from 'react-router-dom';
// 리덕스
import { connect } from 'react-redux';
import { loadWordFB } from '../store';

function Home({ voca, loadWord }) {
  useEffect(() => {
    loadWord();
  }, []);

  return (
    <>
      <Link to="/">
        <Header>단어장</Header>
      </Link>
      <Container>
        <Cards>
          {voca.map((voca) => (
            <Card voca={voca} key={voca.id} />
          ))}
        </Cards>
        <Link to={`/word/add`}>
          <AddBtn>
            <FaPlus color="#fff" size="25" />
          </AddBtn>
        </Link>
      </Container>
    </>
  );
}

const Cards = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 20px;
`;
const AddBtn = styled.div`
  position: fixed;
  background-color: rgb(247, 203, 228);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  bottom: 30px;
  right: 30px;
  box-shadow: 0px 0px 10px rgb(230, 125, 154);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  cursor: pointer;

  &:hover {
    transform: rotate(90deg);
  }
`;

function getCurrentState(state) {
  return { voca: state };
}

function mapDispatchToProps(dispatch) {
  return {
    loadWord: () => {
      dispatch(loadWordFB());
    },
  };
}

export default connect(getCurrentState, mapDispatchToProps)(Home);
