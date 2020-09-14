import React from 'react'
import { useDispatch } from 'react-redux'
import { showModal } from '../rootModalSlice'

export default function Modal1(props){
  const dispatch = useDispatch()
  const propsModal = {
    title: 'Title modal',
    text: 'Text modal',
    layer: props.layer+1
  }
  return (
    <div>
      <p>{props.text} (Modal n°: {props.layer})</p>
      <button onClick={() => dispatch(showModal({modalType: `MODAL_1`, modalProps: propsModal}))}>Open modal</button>

    </div>
  )
}