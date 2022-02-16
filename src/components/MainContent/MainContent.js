import React from 'react';
import styled from 'styled-components/macro';

import data from '../../data';
import PhotoGridItem from '../PhotoGridItem';

const MainContent = () => {
  return (
    <Wrapper>
      {data.map(({ id, src, alt, tags }) => (
        <PhotoGridItem key={id} id={id} src={src} alt={alt} tags={tags} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* wrapper configuration: */
  max-width: calc(1200 / 16 * 1rem);
  padding: 0 32px;
  margin: 0 auto;
  /* grid configuration: */
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 128px;
  padding-bottom: 128px;
`;

export default MainContent;
