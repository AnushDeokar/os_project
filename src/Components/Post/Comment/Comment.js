import React from "react";
import Markdown from "markdown-to-jsx";
import moment from "moment";

import {PostDate} from "../";
import {AuthorAvatar, AuthorDetails, AuthorName} from "../Author";
import {CommentContainer} from "./";

import {HyperLink, CodeBlock} from "../../Markdown/Overrides";
import logo from "../../../Components/avatar.png"
export const Comment = ({comment}) => {
  return (
    <CommentContainer>
      <AuthorDetails>
        <AuthorAvatar
          src={logo}
          alt={logo}
        />
        <div>
          <AuthorName>Anonymous</AuthorName>
          <PostDate>{moment(comment.updatedAt).format("DD MMM YYYY")}</PostDate>
        </div>
      </AuthorDetails>

      <Markdown
        options={{
          overrides: {
            a: {
              component: HyperLink,
            },
            pre: {
              component: CodeBlock,
            },
          },
        }}
      >
        {comment.body}
      </Markdown>
    </CommentContainer>
  );
};
