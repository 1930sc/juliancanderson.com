import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import {
  StyledSection,
  Container,
  Heading,
  PortfoliosWrapper,
  Item,
} from './styles'

const Blogpost = ({ blogs }) => {
  return (
    <StyledSection>
      <Container>
        <Heading>blogposts.</Heading>
        <PortfoliosWrapper>
          {blogs.slice(0, 5).map(blog => (
            <Item key={blog.title}>
              <Link
                dangerouslySetInnerHTML={{ __html: blog.title }}
                to={'/blog' + blog.url}
              />
            </Item>
          ))}
        </PortfoliosWrapper>
      </Container>
    </StyledSection>
  )
}

Blogpost.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default Blogpost
