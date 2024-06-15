const paths = {
  home(): string {
    return '/'
  },
  /**
   * @param {String} slug
   * @returns {String} The path to the topic page
   */
  topicShow(slug: string): string {
    return `/topics/${slug}`
  },
  /**
   * @param {String} slug
   * @returns {String} The path to the new post page
   */
  postCreate(slug: string): string {
    return `/topics/${slug}/posts/new`
  },
  /**
   * @param {String} slug
   * @param {String} postId
   * @returns {String} The path to the post page
   */
  postShow(slug: string, postId: string): string {
    return `/topics/${slug}/posts/${postId}`
  },
}

export default paths
