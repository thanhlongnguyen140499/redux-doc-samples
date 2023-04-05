import React from 'react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor'

const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <h4>
          <PostAuthor userId={post.user} />
        </h4>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}

export default SinglePostPage
