/* eslint-disable react/jsx-no-undef */
import { Heading } from '../../components/Heading';
import * as Styled from './styles'

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading title="Testando esta merda!"/>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
