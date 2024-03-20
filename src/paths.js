const paths = {
  home() {
    return '/'
  },
  /**
   * @param {String} slug
   * @returns {String} The path to the topic page
   */
  topicShow(slug) {
    return `/topics/${slug}`
  },
  /**
   * @param {String} slug
   * @returns {String} The path to the new post page
   */
  postCreate(slug) {
    return `/topics/${slug}/posts/new`
  },
  /**
   * @param {String} slug
   * @param {String} postId
   * @returns {String} The path to the post page
   */
  postShow(slug, postId) {
    return `/topics/${slug}/posts/${postId}`
  },
}

export default paths
