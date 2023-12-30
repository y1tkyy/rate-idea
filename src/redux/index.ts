export { store } from './store'
export { useAppDispatch, useAppSelector } from './hooks'
export { isOpenSelect, isRegistrSelect } from './authModal/selectors'
export {
  openModal,
  closeModal,
  openRegistrModal,
  openLoginModal,
} from './authModal/slice'
export type { RootState, AppDispatch } from './store'
