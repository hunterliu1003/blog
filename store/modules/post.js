import { db } from '@/plugins/firebase'

export const actions = {
  addPost ({}, payload) {
    return db.collection('posts').add({ ...payload })
      .then(data => ({ id: data.id, ...payload }))
  },
  setPost ({}, payload) {
    return db.collection('posts').doc(payload.postId).set({ ...payload.thePost }, { merge: true })
      .then(() => ({ ...payload.thePost, id: payload.postId }))
  },
  async getPostsByPage ({}, payload) {
    let postsCol = db.collection('posts').where('isShow', '==', true).orderBy('postTime', 'desc')
    let docs = await postsCol.get()
      .then(({ docs }) => docs)
    let startAt = (payload.pageNum - 1) * payload.perPage
    let page = docs[startAt] ? Number(payload.pageNum) : 1
    let size = docs.length
    let pageLength = Math.ceil(size / payload.perPage)
    if (size === 0) return {
      page: 1,
      size: 1,
      posts: []
    }
    let postTime = docs[startAt]
    ? docs[startAt].data().postTime
    : docs[0].data().postTime

    return await postsCol.startAt(postTime).limit(payload.perPage).get()
      .then(({ docs }) => {
        const posts = []
        docs.forEach(doc => {
          posts.push({ ...doc.data(), id: doc.id })
        })
        return {
          page,
          pageLength,
          posts
        }
      })
  },
  getPostsAdmin () {
    return db.collection('posts').orderBy('postTime', 'desc').get()
      .then(docs => {
        const posts = []
        docs.forEach(doc => {
          posts.push({ ...doc.data(), id: doc.id })
        })
        return posts
      })
  },
  getPostsByTagId ({}, tagId) {
    return db.collection('posts').where('isShow', '==', true).where('tags', 'array-contains', tagId).get()
      .then(docs => {
        const posts = []
        docs.forEach(doc => {
          posts.push({ ...doc.data(), id: doc.id })
        })
        return posts
      })
  },
  getPostByPostId ({}, postId) {
    return db.collection('posts').doc(postId).get()
      .then(doc => doc.data())
  },
  getPosts () {
    return db.collection('posts').where('isShow', '==', true).orderBy('postTime', 'desc').get()
      .then(({ docs }) => {
        const posts = []
        docs.forEach(doc => {
          posts.push({ ...doc.data(), id: doc.id })
        })
        return posts
      })
  }
}