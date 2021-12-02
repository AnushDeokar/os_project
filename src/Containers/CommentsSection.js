import React from "react";

import {
  Comment,
  CommentLink,
  CommentLinkContainer,
} from "../Components/Post/Comment";

const CommentsSection = ({postUrl, comments}) => {
  return (
    <>
      <CommentLinkContainer>
        <CommentLink  target="_blank">
          Post a comment
        </CommentLink>
      </CommentLinkContainer>
      {comments.map((v, id) => (
        <Comment comment={v} key={id} />
      ))}
    </>
  );
};

export default CommentsSection;
