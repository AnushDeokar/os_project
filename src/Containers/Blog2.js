import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate, PostDateLink, PostReaction, BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';
import img1 from './blog2img1.PNG'
import img2 from './blog2img2.PNG'

const comments = [{
    id:1,
    body: "Very Nice Blog",
    author:{avatarUrl:"/blog1"},

    }
]


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
                <PostTitle>Synchronization in Real Time Distributed Operating systems</PostTitle>
                
                <div>
                <AuthorDetails>
                    <AuthorAvatar src={logo} />
                    <div>
                        <AuthorName>Shantanu Bakshi</AuthorName>
                        <PostDate>
                            30Nov 3 Min Read .
                        </PostDate>
                    </div>
                </AuthorDetails>
                </div>

                <Markdown>
                The concept of real time operating system alls into the category of distributed systems
         
          </Markdown>
            <br/>
            <br/>
          

            <Markdown>
            This is important as we can apply coherency and concurrency to a single machine but to apply the same to a large collection we need to treat the collection of computers as a single system.


            </Markdown>


            <br/>
            <br/>


            <Markdown>
            There are a few important things to take care of in this scenario namely , time zones and consistency among ordering of machines and correlated events.
            </Markdown>


            <br/>
            <br/>

            <Markdown>
            ##Physical clocks 
            </Markdown>


            <br/>
            <br/>


            <Markdown>
            Each systems os connects to the network (Internet), the OS then contacts a timer server, which is equipped with a UTC receiver or an accurate clock, to accurately reset the local CMOS timer using Network Time Protocol, also called NTP. But due to small frequency differences between the systems the times of each system tends to be skewed . This calls for a protocol to synchronize the clocks of each system.
            </Markdown>


            <br/>
            <br/>


            <Markdown>
            Network time protocol 
            </Markdown>

            <img src={img1}/>

            <br/>
            <br/>

            <Markdown>
                NTP servers, of which there are thousands around the world, have accessto highly precise atomic clocks and GPS clocks. Specialized receivers are required to directly communicate with the NTP servers for these services. It is not practical or cost-effective to equip every computer with one of these receivers. Instead, computers designated as primary time servers are outfitted with the receivers, and they use protocols such as NTP to synchronize the clock times of networked computers.
            </Markdown>
            <br/>
            <br/>

            <Markdown>
            Here connectivity is quantified in stratum . as the dedicated server is stratum 0 , the first connected layer is stratum 1, the next is stratum 2 etc…
            </Markdown>


            <br/>
            <br/>
            <Markdown>
            ##Logical clocks
            </Markdown>


            <br/>
            <br/>





            <Markdown>
            These are based on the principle that if x and y are events in same process then x-`&gt;`y if x happens after y . This way we can avoid the notion of a concrete clock and make it dynamic to accommodate the order of events .
            </Markdown>


            <br/>
            <br/>

            <Markdown>
            
            We can even assign a function f(a) which gives us the timestamp of a and if an event b is before a then f(a) is less than f(b) . This can be applied to signal transmit and receive by different processes across different system.
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
            2. If the message is sent to process Pj then set the events timestamp to f(pi)
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            

            3. After the event is received by process Pj its clock is set to the max of  f(pj),f(pi)  and returns to step 1.
            
            </Markdown>
            <br/><br/>
            <img src={img2}/>
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


export default Blog1;