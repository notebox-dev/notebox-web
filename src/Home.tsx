import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { usePopper } from 'react-popper'

export const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const onCreateBlock = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== containerRef.current) return
    setBlock((prevBlocks) => {
      return [...prevBlocks, { id: Date.now(), content: null }]
    })
  }

  const onContextMenu = (event) => {
    event.preventDefault()
    const selection = window.getSelection()
    if (!selection || selection.anchorOffset === selection.focusOffset) {
      return
    }

    const getBoundingClientRect = () => selection.getRangeAt(0).getBoundingClientRect()

    setVirtual({
      clientWidth: getBoundingClientRect().width,
      clientHeight: getBoundingClientRect().height,
      getBoundingClientRect,
    })

    setVisible(true)
  }

  const [blocks, setBlock] = useState([])
  const [isVisible, setVisible] = useState(false)

  const [popperElement, setPopperElement] = React.useState(null)
  const [virtual, setVirtual] = useState(null)
  const { styles, attributes } = usePopper(virtual, popperElement)

  useEffect(() => {
    const onDocClick = (event: MouseEvent) => {
      if (event.target !== popperElement) {
        setVisible(false)
      }
    }
    const onDocKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setVisible(false)
      }
    }
    document.addEventListener('click', onDocClick as any)
    document.addEventListener('keydown', onDocKeydown as any)
  }, [])

  return (
    <>
      <Container ref={containerRef} onClick={onCreateBlock}>
        x
        {blocks.map((block) => (
          <Block key={block.id} onContextMenu={onContextMenu}></Block>
        ))}
      </Container>
      {isVisible && (
        <Popover ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          Popper element
        </Popover>
      )}
    </>
  )
}

const Container = styled.div`
  background-color: #ffc;
  height: 100vh;
`

const Block = styled.div.attrs(() => ({ contentEditable: true }))`
  min-height: 32px;
  width: 300px;
  background-color: #f0c;
`

const Popover = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
`
