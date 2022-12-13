function getPostsWithMedia(postsArray: []) {
  return postsArray.filter((post) => post?.image !== undefined);
}

function getPostsWithText(postsArray: []) {
  return postsArray.filter((post) => post?.image === undefined);
}

export default { getPostsWithMedia, getPostsWithText };
