import React from 'react'
import styled from 'styled-components';

const Heading = ({title, span, title2}) => {
  return (
    <Head>
        {title}
        <Span>
            {span}
        </Span>
        {title2}
    </Head>
  )
}

export default Heading;


const Head = styled.h1`
    text-align: center;
    font-size: 3.5rem;
    padding: 1rem;
    color: #666;

`

const Span = styled.span`
    color: var(--red);
    padding: 0 1rem;
`