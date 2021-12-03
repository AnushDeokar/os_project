import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate,  BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
// import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';
import img1 from './blog8img1.PNG'
import img2 from './blog8img2.PNG'
import img3 from './blog8img3.PNG'

import 'katex/dist/katex.min.css';


const comments = [{
    id:1,
    body: "Very Nice Blog",
    author:{avatarUrl:"/blog1"},

    }
]


// const Markdown1 = (props) => <ReactMarkdown {..._mapProps(props)} />;

const Blog8 = () => {


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
            ## INTRODUCTION
         
          </Markdown>
            <br/>
            <br/>
          <Markdown>
            Multithreaded programming is an increasingly popular way to express concurrency in applications. It allows to decompose an application into separate threads of synchronized execution. 
          </Markdown>
            <br/>

            <Markdown>
            In the case of software operating systems non preemptive scheduling is used to carry out synchronization with high latency an no async operations , while preemptive scheduling enables async operations and also requires a lot of complex  synchronization algorithms and data structures so we need to adapt to a way which involves both such methods like cooperative multitasking , which gives control of processor access to individual threads while reducing latency . For example GUI toolkits .

            </Markdown>


            <br/>
            


            <Markdown>
            But in our case we would like to use cooperative multitasking techniques together with partial reconfiguration for sharing FPGA logic resources between hardware modules as a feasible compromise between execution efficiency and implementation complexity. The operating system used here is RECON OS , which uses  preemptive scheduling technique for software threads on the system’s CPU with cooperative scheduling for hardware threads in the FPGA’s fabric .

            </Markdown>


            <br/>
            <br/>


            <Markdown>
            Now lets inspect the concurrency situations when the processes interact with each other instead of a standalone process. Theoretically, from the operating system point of view, these interactions can be classified on the basis of the degree to which processes are aware of each other’s existence. Several processes may exhibit aspects of both competition and cooperation.

            </Markdown>


            <br/>
            <br/>

            <Markdown>
            
##RECON-OS:  a brief description

</Markdown>
<img src={img1} alt=""/>
<br/>
            <Markdown>
            It uses the hardware processes as independent threads and provides access to them via VHDL functions . 
</Markdown>
<br/>

            <Markdown>
## HARDWARE MULTITASKING
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            Multitasking involves sharing of resources like registers and microprocessors but in the case of FPGA we have the process/thread state stored across many small random elements like flip flops and embedded registers . 
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            

            This has to solutions namely :      
            </Markdown>
            <br/><br/>
            <Markdown>
            1. NON preemptive - multitasking : Here threads are not preempted but completed in one go . Recon OS uses create() and exit() calls for this purpose . If A , B threads have execution times T(A) and T(B) then time taken for processing is T = T(A) + T(B) + 2*t where t  = additional buffering time. But this approach takes a longer time to run and has to wait for IO operations .            </Markdown>
            <br/><br/>

            <Markdown>

            2. Cooperative Multitasking : A thread typically signals its readiness to be suspended by calling a yield() function. If no other threads are waiting for a slot, this call would return immediately with no consequences for the thread. This works as follows consider the same threads from before the time for executing them would become  :- 
Tc(A, B) = 2tl + T(A) + tAs + tAr + max(t block, tl + T(B)).  What happens is A uses a part of execution time for blocking and yields to other slots for execution . oVerall it reduces the total runtime .

        </Markdown>
            <br/><br/>

<img src={img2} alt=""/>
            <Markdown>


            ##IMPLEMENTATION AND CONCLUSION           </Markdown>

            <br/><br/>

            <Markdown>

            To evaluate the cooperative scheduling technique, timing overheads  of individual operations have been measured  as well as total application execution time of a prototype implementation. The prototypes employs a ReconOS/eCos operating system on a XC2VP30 FPGA platform using a single reconfigurable slot and an operating frequency of 300 MHz and 100 MHz for the CPU and the reconfigurable logic, respectively.
            </Markdown>

            <br/><br/>

<img src={img3} alt=""/>
            <Markdown>

            1.We can see that the overhead of scheduling is very small which is good.

            </Markdown>

            <br/><br/>




            <Markdown>
            

            2. Cooperative multitasking doesn't improve the performance per thread.             </Markdown>
            <br/><br/>
                        <Markdown>
            2. When an object enters the signaled state, the NT executive releases all thread objects that are waiting on the synchronization object.
            </Markdown>
            <br/><br/>

            <Markdown>
            3. Reconfigurable portion 13*17 CLB take the longest time but can be minimized using preemptive multitasking .
           </Markdown>

            <br/>
            <br/>


            <Markdown>

            By this we can conclude that cooperative multitasking performs better than non preemptive on reconfigurable hardware threads. 

            </Markdown>

            <br/><br/>



            <Markdown>
            

            ##Reference
            </Markdown>
           
                        <Markdown>
                        E. Lubbers and M. Platzner, "Cooperative multithreading in dynamically reconfigurable systems," 2009 International Conference on Field Programmable Logic and Applications, 2009, pp. 551-554, doi: 10.1109/FPL.2009.5272418.           </Markdown>
            <br/><br/>

            





                <CommentsSection comments = {comments}/>
            </PostContainer>
        </div>
    )
}


export default Blog8;