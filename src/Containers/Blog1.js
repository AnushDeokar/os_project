import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate,  BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
// import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';
import img1 from './blog1img1.PNG'


import 'katex/dist/katex.min.css';


const comments = [{
    id:1,
    body: "Very Nice Blog",
    author:{avatarUrl:"/blog1"},

    }
]


// const Markdown1 = (props) => <ReactMarkdown {..._mapProps(props)} />;

const Blog1 = () => {


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
                <PostTitle>Process and thread synchronization in Windows systems</PostTitle>
                
                <div>
                <AuthorDetails>
                    <AuthorAvatar src={logo} />
                    <div>
                        <AuthorName>Shantanu Bakshi</AuthorName>
                        <PostDate>
                            30Nov 5 Min Read .
                        </PostDate>
                    </div>
                </AuthorDetails>
                </div>








                <Markdown>
            System synchronization is a mechanism through which we tend to optimize our output and throughput from the processor . This is achieved by Interleaving different atomic tasks of process/thread in time to give them a simultaneous appearance . This is different from parallel processing which involves multiple cores. Here actual overlap takes place .
Concurrent processing also helps increase the throughput which is No. of instructions/unit time
         
          </Markdown>
            <br/>
            <br/>
          <Markdown>
          Concurrent processing also helps increase the throughput which is No. of instructions/unit time 
          </Markdown>
            <img src={img1} alt=""/>

            <Markdown>
            The main problem in synchronizing processes is sharing of global variables and allocation of resources

            </Markdown>


            <br/>
            <br/>


            <Markdown>
            Interaction in processes
            </Markdown>


            <br/>
            <br/>


            <Markdown>
            Now lets inspect the concurrency situations when the processes interact with each other instead of a standalone process. Theoretically, from the operating system point of view, these interactions can be classified on the basis of the degree to which processes are aware of each other’s existence. Several processes may exhibit aspects of both competition and cooperation.

            </Markdown>


            <br/>
            <br/>

            <Markdown>
            

1. Unaware processes : Are constantly in competition for resources . May it be file sharing or hardware resource sharing . They effect each others timing and common result.

</Markdown>
<br/>
            <Markdown>
2. Indirect awareness : These processes work in cooperation by sharing common resources .
</Markdown>
<br/>

            <Markdown>
3. Directly aware : These processes communicate with each other for resource sharing
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            The successful implementation of concurrency among processes requires the ability to define critical sections and enforce mutual exclusion. This is fundamental for any concurrent processing scheme. Generally, any facility or capability that is to provide support for mutual exclusion should meet the following requirement:
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            

            1. Mutual exclusion must be entered: Only one process at a time is allowed into its critical section among all processes that have critical sections for the same resource or shared object.
            
            </Markdown>
            <br/><br/>
            <Markdown>
            2. It must not be possible for a process requiring access to a critical section to be delayed indefinitely; no deadlock or starvation can be allowed.
            </Markdown>
            <br/><br/>

            <Markdown>

            ### In Windows, the mutual exclusion has been satisfied through using its APIs.
            </Markdown>
            <br/><br/>

            <Markdown>

            Note : Handle is a method or a data structure or a class for handling an object in this context
            </Markdown>

            <br/><br/>

            <Markdown>

            Windows synchronization Mechanism :-
            </Markdown>

            <br/><br/>


            <Markdown>

            The Mechanism is as follows :-
            </Markdown>

            <br/><br/>




            <Markdown>
            

            1. The thread issues a wait request to the NT executive function by using the handle of the synchronization object.
            </Markdown>
            <br/><br/>
                        <Markdown>
            2. When an object enters the signaled state, the NT executive releases all thread objects that are waiting on the synchronization object.
            </Markdown>
            <br/><br/>

            <Markdown>
            3. The thread blocks its own functions using wait() calls until a non signalled object is set to signal state.
            </Markdown>

            <br/>
            <br/>


            <Markdown>

            The Windows32 mechanism uses the following
            </Markdown>

            <br/><br/>



            <Markdown>
            

            1. Event : For Notifying the thread
            </Markdown>
            <br/><br/>
                        <Markdown>
            2. Semaphore : For maintaining and limiting the count of threads for concurrent access.
            </Markdown>
            <br/><br/>

            <Markdown>
            3. Job : Uses the CreateJobObject() function for setting state of Job object to signalled .
            </Markdown>

            <br/><br/>

            <Markdown>
            4. Thread/Process : Use the CreateProcess(),CreateThread(), or CreateRemoteThread() function . State is non signalled when running and signalled when terminated.
            </Markdown>

            <br/>
            <br/>


            <Markdown>
            Wait Functions:
            </Markdown>

            <br/>
            <br/>


            <Markdown>
            The wait functions allow a thread to block . These functions wait for a criteria to be fulfilled .The type of wait function determines the set of criteria used. When a wait function is called, Until the criteria is fulfilled ,It keeps waiting. It uses no processor time while waiting for the criteria to be met. There are four types of wait functions:
            </Markdown>

            <br/>
            <br/>



            <Markdown>
            

            1. Single Object functions : The SignalObjectAndWait(),WaitForSingleObject(), and WaitForSingleObjectEx() functions are the API provided by windows32 . A handle or a method is required for them to control a synchronization Object .The return criteria are as follows . Either the specified object is in the signaled state or time-out interval elapses. The SignalObjectAndWait() function allows the calling thread to automatically set the state of an object to signaled and wait for another object to be signaled.
            </Markdown>
            <br/><br/>
                        <Markdown>
            2. Multiple-object Functions : These are used for handling multiple sync. objects.WaitForMultipleObjects(),WaitForMultipleObjectsEx(),MsgWaitForMultipleObjects(), and MsgWaitForMultipleObjectsEx() functions allow the calling thread to give an array of object handles as an input . Theses are activated when Either one or all of the object’s handles have been signalled or the time-out interval elapses.The MsgWaitForMultipleObjects() andMsgWaitForMultipleObjectsEx() function allow you to specify input event objects in the object handle array.
            </Markdown>
            <br/><br/>

            <Markdown>
            3. Alterable wait functions: MsgWaitForMultipleObjectsEx(),SignalObjectAndWait(),WaitForMultipleObjectsEx(), and WaitForSingleObjectEx() functions can optionally perform an alert-able wait operation. In this case the function can return if the system queues an I/O routine or an execution of an asynchronous process.
            </Markdown>

            <br/><br/>

            <Markdown>
            4. Registered Wait Functions : The RegisterWaitForSingleObject() function enables a wait operation form a thread in the thread pool called a worker thread . This causes the timer to reset on every signaled event.
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            Conclusion :- As we see than win32 api allows us to use 4 different types of wait functions for implementing concurrency in our program.
            blog project

            </Markdown>

            <br/>
            <br/>



                <CommentsSection comments = {comments}/>
            </PostContainer>
        </div>
    )
}


export default Blog1;