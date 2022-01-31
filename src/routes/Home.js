import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card';
import Header from '../components/Header';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { load, loadWordFB } from '../store';
import { useEffect } from 'react';

function Home({ voca, loadWord }) {
  useEffect(() => {
    loadWord();
  }, []);

  return (
    <>
      <Header>중국어 단어장</Header>
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
