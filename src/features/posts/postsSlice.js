import { sub } from 'date-fns'

const { createSlice, nanoid } = require('@reduxjs/toolkit')

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'Bye!',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: '3',
    title: 'Third Post!',
    content: 'Ok!',
    date: sub(new Date(), { minutes: 8 }).toISOString(),
  },
  {
    id: '4',
    title: 'Fourth Post!',
    content: 'What`s wrong!',
    date: sub(new Date(), { minutes: 15 }).toISOString(),
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        }
      },
    },
    postUpdated(state, action) {
      const { id, title, content, userId } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
        existingPost.user = userId
      }
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
