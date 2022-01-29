import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card';
import Header from '../components/Header';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { add } from '../store';

function Home({ voca, addWord }) {
  // console.log(voca);

  return (
    <>
      <Header>단어장</Header>
      <Container>
        <Cards>
          {voca.map((voca) => (
            <Card voca={voca} key={voca.id} />
          ))}
        </Cards>
        <Link to={`/word/add`}>
          <AddBtn></AddBtn>
        </Link>
      </Container>
    </>
  );
}

const AddBtn = styled.div`
  position: fixed;
  background-color: rgb(230, 125, 154);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  bottom: 30px;
  right: 30px;
  box-shadow: 3px 3px 10px rgb(230, 125, 154);
`;

const Cards = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));

  gap: 20px;
`;

function getCurrentState(state) {
  return { voca: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addWord: (text) => {
      dispatch(add(text));
    },
  };
}

export default connect(getCurrentState, mapDispatchToProps)(Home);
