import styled from 'styled-components'
import Center from './Center'
import Image from 'next/image'
import PrimaryBtn from './PrimaryBtn'

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`

const Column = styled.div`
  display: flex;
  align-items: center;
`

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Pro anywhere</Title>
              <Desc>
                The warning message you received is related to the use of the
                UNSAFE_componentWillMount lifecycle method in a React component.
                React introduced a new strict mode in versions 16.3 and later to
                help identify and address potential issues in your code. In
                strict mode, certain legacy lifecycle methods, like
                UNSAFE_componentWillMount, are considered unsafe and should be
                avoided. To address this warning and update your SideEffect
                component, you should follow the recommended guidelines:
              </Desc>
              <PrimaryBtn size={`l`}>Read More</PrimaryBtn>
              <button>Add to Cart</button>
            </div>
          </Column>
          <Column>
            <img
              // width={'450'}
              // height={'290'}
              src="https://kurt-next-ecommerce.s3.amazonaws.com/1692563175938.png"
              alt="phone"
            />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  )
}
