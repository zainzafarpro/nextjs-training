const PostId = ({ params }) => {
  const { postID } = params;
  return <div>This is post {postID}</div>;
};

export default PostId;
