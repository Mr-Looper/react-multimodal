import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal, selectModal } from './rootModalSlice'

// Content of every specific modal
import Modal1 from './modal1/Modal1'
// import Modal2 from './Modal2/Modal2'
// import Modal3 from './Modal3/Modal3'

const baseLayer = 1000;
const MODAL_COMPONENTS = {
  'MODAL_0': Modal1,
  'MODAL_1': Modal1,
  'MODAL_2': Modal1,
  'MODAL_3': Modal1,
  'MODAL_4': Modal1,
  'MODAL_5': Modal1,
  'MODAL_6': Modal1
  // 'MODAL_2': Modal2,
  // 'MODAL_3': Modal3,
}
export function RootModal() {
  const modals = useSelector(selectModal);
  const dispatch = useDispatch()
  const listModals = modals.arrayModals && modals.arrayModals.length > 0? modals.arrayModals.map((modal, index) => {
    return (
      <div className="container-modal">
        <div key={index} className="modal open-modal" style={modal.modalProps.style || {}}>
          <div className="modal-header">
            <p className="title">{modal.modalProps.title}</p>
          </div>
          <div className="modal-body">
            { React.createElement(MODAL_COMPONENTS[modal.modalType] , {...modal.modalProps})}
          </div>
          <div className="modal-footer">
            {modal.modalProps.otherButton?
              <button className="btn-success" onClick={modal.modalProps.otherButton.otherFunction}>{modal.modalProps.otherButton.otherText}</button> : ''
            }
            <button className="btn-default" onClick={() => dispatch(hideModal())}>Close</button>
          </div>
        </div>
      </div>
    )
  }) : ''
  console.log(listModals)
  return (
    <div>
      {listModals}
    </div>);
}

// export default (connect(state => state.modal)(RootModal))
// export default RootModal;