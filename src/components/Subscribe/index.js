import React from 'react'
// import React, { useCallback, useState } from 'react'

import {
  StyledSection,
  Container,
  Heading,
  FormWrapper,
  Iframe,
} from './styles'

// const useInput = name => {
//   const [value, setValue] = useState('')
//   const onChange = useCallback(e => {
//     setValue(e.target.value)
//   }, [])

//   return {
//     value,
//     onChange,
//     name,
//   }
// }

export const Subscribe = () => {
  // const bindName = useInput('FNAME')
  // const bindEmail = useInput('EMAIL')

  return (
    <StyledSection>
      <Container>
        <Heading>
          SUBSCRIBE TO MY <br /> EMAIL LIST
        </Heading>
        <FormWrapper>
          <Iframe
            width="480"
            height="320"
            src="https://julianchristiananderson.substack.com/embed"
            frameborder="0"
            scrolling="no"
          />
          {/* <Form
            action="https://xyz.us18.list-manage.com/subscribe/post?u=d7a67503832690f773db3773c&amp;id=201a280d07"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate
            autoComplete="off"
          >
            <Input
              type="text"
              value=""
              name="FNAME"
              id="mce-FNAME"
              placeholder="Your First Name"
              {...bindName}
            />
            <Input
              type="email"
              value=""
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Your Email"
              {...bindEmail}
            />
            <Input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </Form> */}
        </FormWrapper>
        {/* <iframe
          width="480"
          height="320"
          title="Substack"
          src="https://julianchristiananderson.substack.com/embed"
          frameborder="0"
          scrolling="no"
        /> */}
      </Container>
    </StyledSection>
  )
}
