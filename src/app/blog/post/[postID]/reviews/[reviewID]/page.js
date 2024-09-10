const ReviewPage = ({ params: { postID, reviewID } }) => {
  return (
    <div>
      This is the Review {reviewID} of post {postID}
    </div>
  );
};

export default ReviewPage;
