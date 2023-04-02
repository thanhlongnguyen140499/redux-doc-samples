import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>ADD A NEW POST</h2>
      <form>
        {/* Title */}
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        {/* Content */}
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        {/* submit button */}
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
