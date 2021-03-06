import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './Container';

import { colors } from '../variables';

/**
 * backgroundStyle()
 *
 * function
 *
 * A helper function for determining what the background looks like based off of if the background
 *  has an image.
 *
 * @param {String} image - An optional image.
 * @param {String} backgroundColor - An optional background color.
 */
const backgroundStyle = (image, backgroundColor) => {
  if (image) {
    return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`;
  }
  // If a background color exists, use that, otherwise use the dark gray color
  return backgroundColor || colors.darkGray;
};

/**
 * StyledHeader
 *
 * Styled Component
 *
 * A wrapper styled component for the header to ensure that content is displayed nicely and
 *  aligned inside.
 */
const StyledHeader = styled.div`
  background: ${({ backgroundImage, backgroundColor }) => backgroundStyle(backgroundImage, backgroundColor)}};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, .05);
  margin-bottom: 40px;
  padding: 80px 0;
  text-align: center;
  width: 100%;
  h3 {
    color: ${({ theme }) => theme.white || colors.white};
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  p {
    color: ${({ theme }) => theme.white || colors.white};
    margin: 0 auto;
    max-width: 480px;
    text-align: center;
    width: 90%;
  }
`;

/**
 * Header
 *
 * component
 *
 * A header component to be used on pages to display content (usually at the top). This is useful
 *  for page names or to get the user's attention about some text or content.
 *
 * @param {string} title - A string of the title to display inside of the header.
 * @param {string} description - A string of the description to display inside of the header.
 * @param {string} backgroundImage - An optional image that can be used as the background iamge in the header.
 * @param {string} backgroundColor - An optional background color that can be used as the background color for the header.
 */
const Header = ({
  title,
  description,
  backgroundImage,
  backgroundColor,
}) => (
  <Container>
    <StyledHeader backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
      <h3>
        {title}
      </h3>
      <p>
        {description}
      </p>
    </StyledHeader>
  </Container>
);

// Config propTypes
Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
};

// Config defaultProps
Header.defaultProps = {
  title: '',
  description: '',
  backgroundImage: null,
  backgroundColor: null,
};

export default Header;
