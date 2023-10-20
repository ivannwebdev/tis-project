import { SavedUsers } from '../pages/SavedUsers'
import { UsersList } from '../pages/UsersList'

export const routNames = Object.freeze({
  home: '/',
  saved: '/saved'
})

export const routes = Object.freeze([
  { path: routNames.home, title: 'Home', element: <UsersList/> },
  { path: routNames.saved, title: 'Saved users', element: <SavedUsers/> }
])
