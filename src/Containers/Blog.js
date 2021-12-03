import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "../config";
import { Header } from "../Components/Header";
import { Loader } from '../Components/Common'
import { BlogContainer } from '../Components/Blog'
import { Card } from '../Components/Blog/Card'

const GET_POSTS = gql`
{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issues(first: 100, states: OPEN, filterBy: { labels: "blog" }, orderBy: { direction: DESC, field: CREATED_AT }) {
      nodes {
        title
        body
        bodyHTML
        bodyText
        number
        labels(first: 100) {
          nodes {
            color
            name
            id
          }
        }
        author {
          url
          avatarUrl
          login
        }
        updatedAt
        id
      }
    }
  }
}
`


const myposts = [
  {
    id: 1,
    title: "Process and thread synchronization in Windows systems",
    bodyText:"System synchronization is a mechanism through which we tend to optimize our output and throughput from the processor . This is achieved by Interleaving different atomic tasks of process/thread in time to give them a ...READ MORE",
    tags:[{id:1, name:"Tutorial"}],
    url:"blog1",
    time:"2"
  },
  {
    id: 2,
    title: "Synchronization in Real Time Distributed Operating systems",
    bodyText:"Each systems os connects to the network (Internet), the OS then contacts a timer server, which is equipped with a UTC receiver or an accurate clock, to accurately reset the local CMOS timer using Network Time Protocol .... READ MORE",
    tags:[{id:1, name:"General"}],
    url:"blog2",
    time:"3"
  },
  {
    id: 3,
    title: "Introduction to Reliability in Operating Systems",
    bodyText:"Reliability is one of the desirable features, a general purpose operating system is expected to display. Indeed an unreliable system is not of much use. Through this blog, we would be examining what is reliability .... READ MORE",
    tags:[{id:1, name:"General"}],
    url:"blog3",
    time:"3"
  },
  {
    id: 4,
    title: "Using a Real-Time Operating System for Multitasking in Remote Patient Monitoring",
    bodyText:"One of the more interesting areas of application of real time operating systems is required to reduce overall healthcare costs and provide real time alerts for various acute diseases  ,thus improving the possibility of intervention before any casuality  .... READ MORE",
    tags:[{id:1, name:"Research Review"}],
    url:"blog4",
    time:"3"
  },
  {
    id: 5,
    title: "Critical Section Problem",
    bodyText:"A critical section is a portion of code that a signal process can access at a specified point in time. Other processes must be able to access the shared data resources in this area. ...READ MORE",
    tags:[{id:1, name:"Tutorial"}],
    url:"blog5",
    time:"2"
  },
  {
    id: 6,
    title: "Case Study on Reliability Assessment",
    bodyText:"In this blog, we will be looking at a method for empirically estimating reliability of operating systems presented in a recent research paper. The literature tells us ...READ MORE",
    tags:[{id:1, name:"Research Review"}],
    url:"blog6",
    time:"2"
  },

  {
    id: 7,
    title: "Error Detection & Error Recovery",
    bodyText:"Error detection refers to finding out the error - the deviation from a component's specified behaviour. The key component of error detection is redundancy - that is, the we  ...READ MORE",
    tags:[{id:1, name:"General"}],
    url:"blog7",
    time:"2"
  },
  {
    id: 8,
    title: "COOPERATIVE MULTITHREADING IN DYNAMICALLY RECONFIGURABLE SYSTEMS",
    bodyText:"Multithreaded programming is an increasingly popular way to express concurrency in applications. It allows to decompose an application into separate threads of synchronized execution. ...READ MORE",
    tags:[{id:1, name:"Research Review"}],
    url:"blog8",
    time:"7"
  },


]

const Blog = () => {
  // const [posts, setPosts] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error)
      }

      // if (data) {
      //   setPosts(data?.repository?.issues?.nodes)
      // }
    }
  }, [loading, error, data]);

  return (
    <>
      <Header />
      <BlogContainer>
        {
          loading
          ? <Loader />
          : myposts.map((v, i) => {
              return <Card blog={v} key={i} />;
            })
        }
      </BlogContainer>
    </>
  );
}

export default Blog;
