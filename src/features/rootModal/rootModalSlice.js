import { createSlice } from '@reduxjs/toolkit';

export const rootModalSlice = createSlice({
  name: 'rootModal',
  initialState: {
    arrayModals: []
  },
  reducers: {
    showModal: (state, { payload }) => {
      console.log(payload)
      state.arrayModals.push({
        modalType: payload.modalType,
        modalProps: payload.modalProps
      })
    },
    hideModal: (state, { payload }) => {
      console.log(payload)
      state.arrayModals.pop()
      // state.modalType = payload.modalType
      // state.modalProps = {}
      // state.action = 'HIDE'
    },
  },
});

export const { showModal, hideModal } = rootModalSlice.actions;

export const selectModal = (state) => state.rootModal;

export default rootModalSlice.reducer;
