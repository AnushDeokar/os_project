import React, { useState, useEffect } from "react";
import readingTime from "reading-time";
import { useHistory } from "react-router-dom";

import {
  CardContainer,
  CardHeader,
  CardCategory,
  CardReadingTime,
  CardTitle,
  CardDescription,
} from './'

export const Card = ({ blog }) => {
  // const [labels, setLabels] = useState([]);
  const history = useHistory();

  // const openBlog = (title, number) => {
  //   history.push(`/blog/${title}/${number}`);
  // }

  const openBlog = (title, number) => {
    history.push(`/${blog.url}`);
  }

  // useEffect(() => {
  //   const labels = blog.labels.nodes.filter((value) => {
  //     return value.name !== "blog";
  //   });

  //   setLabels(labels);
  // }, [blog.labels.nodes]);
  const labels = blog.tags;
  return (
    <CardContainer>
      <CardHeader>
        <>
        {labels.map((value, i) => {
          return (
            <CardCategory value={value} key={i} />
          );
        })}
        </>
        <CardReadingTime time={blog.time} />
      </CardHeader>
      <div onClick={() => openBlog(blog.title, blog.number)}>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>
          {blog.bodyText}
        </CardDescription>
      </div>
    </CardContainer>
  );
}
