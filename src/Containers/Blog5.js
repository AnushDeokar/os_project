import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate,  BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';


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

          

            <br/>
            <br/>

            <Markdown>
            ##Solutions To The Critical Section
            </Markdown>


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

            <Markdown>
            1. It ensures Mutual Exclusion since only one operation at a time has access to the vital region.
</Markdown>
<br/><br/>

            <Markdown>
2. It ensures progress since no processes are slowed by external activities.

            </Markdown>

            <br/>
            <br/>

            <Markdown>
            3. It ensures Bound Waiting by giving each process a chance.
 

            </Markdown>

            <br/>
            <br/>

            <Markdown>
            

```         
PROCESS Pi
FLAG[i] = true
while( (turn != i) AND (CS is !free) ) then wait;

CRITICAL SECTION FLAG[i] = false
turn = j; //choose another process to go to CS
```

            
            </Markdown>

            <br/><br/>

            <Markdown>
            ##Mutex Locks
            </Markdown>


            <Markdown>

            Because synchronisation hardware is a difficult approach to install for everyone, Mutex Locks were introduced as a tight software method. In this approach, a LOCK is obtained over the crucial resources used inside the critical region in the entry part of code. This lock is released in the exit section.
            </Markdown>

            <br/><br/>

            <Markdown>

            ## Semaphore Solution
            </Markdown>

            


            <Markdown>
            Semaphore is a non-negative variable that is shared between threads. It's a different algorithm or solution to the problem of the critical section. It's a signalling mechanism, as well as a thread that's waiting for a semaphore to be signalled by another thread.
            </Markdown>

            <br/>
            <br/>

            

            <Markdown
            options={{
                overrides: {
                  a: {
                    component: HyperLink
                  },
                  pre: {
                    component: CodeBlock
                  }
                }
              }}
            
            >
            ```
            WAIT ( S ):
            ```
            </Markdown>

              <br/>
            <Markdown
            
            
            >
            ```
            while ( S is less than equal to 0 );
            ```
            </Markdown>
<br/>
            <Markdown >
            ```
            S = S - 1;
            ```
            </Markdown>
<br/>
            <Markdown >
            ```
            SIGNAL ( S ):
            ```
            </Markdown>
<br/>
            <Markdown >
            ```
            S = S + 1;
            ```
            </Markdown>
              <br/><br/>
              <Markdown>##Quiz Time</Markdown>
   
              <Markdown>How many variables s/are required to be shared between processes to solve the critical section problem?</Markdown>




                <CommentsSection comments = {comments}/>
            </PostContainer>
        </div>
    )
}


export default Blog5;