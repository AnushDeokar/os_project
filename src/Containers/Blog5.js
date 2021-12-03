import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate,  BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
// import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';
import img1 from './blog2img1.PNG'
import img2 from './blog2img2.PNG'

const comments = [{
    id:1,
    body: "Very Nice Blog",
    author:{avatarUrl:"/blog1"},

    }
]


const Blog5 = () => {


    const onBackClick = () => {
        // ifthe previous page does not exist in the history list. this method to load the previous (or next) URL in the history list.
        window.history.go();
        // The back() method loads the previous URL in the history list.
        window.history.back();
    };

    return(
        <div>
            <PostContainer>
                <BackButton onClick={() => onBackClick()}>Back</BackButton>
                <PostTitle>Critical Section Problem</PostTitle>
                
                <div>
                <AuthorDetails>
                    <AuthorAvatar src={logo} />
                    <div>
                        <AuthorName>Anush Deokar</AuthorName>
                        <PostDate>
                            15 Nov 2 Min Read .
                        </PostDate>
                    </div>
                </AuthorDetails>
                </div>

                <Markdown>
                A critical section is a portion of code that a signal process can access at a specified point in time. Other processes must be able to access the shared data resources in this area.

         
          </Markdown>
            <br/>
            <br/>
          

            <Markdown>
            ##Rules for Critical Section

            </Markdown>


            <br/>
            <br/>


            <Markdown>
            These three rules must be followed in the critical section
            </Markdown>


            <br/>
            <br/>

            <Markdown>
            1. Bound Waiting: When a process requests to be placed in the critical part, there is a limit to the number of processes that can be placed in that section. As a result, after the limit has been reached, the system must enable the process to enter its critical part.
            </Markdown>


            <br/>


            <Markdown>
            2. Progress:When no one is in the vital part and someone wants in, this solution is utilised. Then, in a finite amount of time, those processes not in their reminder section should select who should go in.
            </Markdown>


            <br/>


            <Markdown>
            3. Mutual Exclusion: It  is a sort of binary semaphore that is used to limit access to a shared resource. To avoid extended priority inversion concerns, it features a priority inheritance mechanism. At any given time, only one process can run in its crucial part.
            </Markdown>

            <img src={img1} alt=""/>

            <br/>
            <br/>

            <Markdown>
            ##Solutions To The Critical Section
            </Markdown>
            <br/>
            <br/>

            <Markdown>
            Peterson Solution
            </Markdown>

            <br/>
            <Markdown>
            It is one of the most widely used solutions to the critical section. It is a classical software-based solution. 
            </Markdown>


            <br/>

            <Markdown>
            In this solution, we use two shared variables and It allows two or more processes to share a single-use resource without conflict, using only shared memory for communication.
            </Markdown>


            <br/>
            <br/>

            <Markdown>
            
            Advantages
</Markdown>
<br/><br/>
            <Markdown>
            There is also an algorithm that formalizes the assignment of time to process events called lamport algorithm which has the following steps.
</Markdown>
<br/><br/>

            <Markdown>
1. Let Pi be a process sending event then it should increment its count f(pi)+=1; where f(pi) is its clock value.
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            2. If the message is sent to process Pj then set the events timestamp to f of pi
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            

            3. After the event is received by process Pj its clock is set to the max of  f(pj),f(pi)  and returns to step 1.
            
            </Markdown>
            <br/><br/>
            <img src={img2} alt=""/>
            <br/><br/>
            <Markdown>
            2. It must not be possible for a process requiring access to a critical section to be delayed indefinitely; no deadlock or starvation can be allowed.
            </Markdown>
            <br/><br/>

            <Markdown>
            ##Vector clocks
            </Markdown>


            <br/>
            <br/>

            <Markdown>

            Are basically a more advanced version of logical clocks in which each process keeps a vector of variables Xi[j] where j is Process pj and Xi[j] denotes events occurred at process pj . This helps to maintain a knowledge of the number of events to each process .
            </Markdown>

            <br/><br/>

            <Markdown>

            This is helpful in exacting the knowledge of causality of various processes .
            </Markdown>

            <br/><br/>


            <Markdown>
            Conclusion :- Hence we have the following clock mechanisms to enforce synchronization in distributed operating systems , namely logical, vector and physical clocks.

            </Markdown>

            <br/>
            <br/>





                <CommentsSection comments = {comments}/>
            </PostContainer>
        </div>
    )
}


export default Blog5;