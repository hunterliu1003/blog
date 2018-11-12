import { db } from '@/plugins/firebase'
import { uniq, flatten } from 'lodash'

export const actions = {
  getAllTags () {
    let postsCol = db.collection('posts').where('isShow', '==', true)
    return postsCol.orderBy('postTime', 'desc').get()
      .then(({ docs }) => {
        let allTags = []
        docs.forEach(doc => {
          allTags.push(doc.data().tags)
        })
        allTags = uniq(flatten(allTags))
        const promises = allTags.map(tag => {
          return postsCol.where('tags', 'array-contains', tag).get()
            .then(({ docs }) => {
              return {
                name: tag,
                size: docs.length,
              }
            })
        })
        return Promise.all(promises)
      })
  }
}