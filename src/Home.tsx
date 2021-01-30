import React from 'react'
import styled from 'styled-components'
import { Editor, RichUtils, EditorState, convertFromRaw } from 'draft-js'
import { ClientOnly } from './ui/client-only'

export const HomePage = () => {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty())

  return (
    <Container>
      <Content>
        <button
          onClick={() => {
            setEditorState(RichUtils.toggleBlockType(editorState, 'header-one'))
          }}
        >
          h1
        </button>
        <ClientOnly>
          <Editor editorState={editorState} onChange={setEditorState} />
        </ClientOnly>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  color: #1a1b1f;
  height: 100vh;
  display: grid;
  grid-template: 'sidebar content';
  grid-template-columns: 240px 1fr;
  box-sizing: border-box;
`

const Content = styled.div`
  border-left: 1px solid #1a1b1f;
  grid-area: content;
  padding: 32px 24px;
`
