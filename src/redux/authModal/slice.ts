import { createSlice } from '@reduxjs/toolkit'
import { AuthSliceState } from './types'

const initialState: AuthSliceState = {
  isOpen: false,
  isRegistr: true,
}

const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true
    },
    closeModal: state => {
      state.isOpen = false
    },
    openRegistrModal: state => {
      state.isRegistr = true
      state.isOpen = true
    },
    openLoginModal: state => {
      state.isRegistr = false
      state.isOpen = true
    },
  },
})

export const { openModal, closeModal, openRegistrModal, openLoginModal } =
  authModalSlice.actions

export default authModalSlice.reducer
