import styled from 'styled-components'
import {memo} from 'react'

const App = () => {
  return (
    <App.Main>
      <App.Header>
        Header
      </App.Header>

      <App.Container>
        Body
      </App.Container>
    </App.Main>
  )
}

App.Main = styled.main`
  margin: 8px;
`;

App.Container = styled.div`
  border: 1px solid gold;
`

App.Header = styled.header`
  width: 100%;
`

export default memo(App)
