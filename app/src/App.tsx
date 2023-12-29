import { StupidButton } from 'lib'
import { css } from '@emotion/react'

function App() {
  return (
    <>
      <StupidButton />
      <div css={css`color: blue`}>Hi there!</div>
    </>
  )
}

export default App
