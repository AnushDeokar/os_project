import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate,  BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';
// import img1 from './blog2img1.PNG'
// import img2 from './blog2img2.PNG'

const comments = [{
    id:1,
    body: "Very Nice Blog",
    author:{avatarUrl:"/blog1"},

    }
]


const Blog3 = () => {


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
                <PostTitle>Introduction to Reliability in Operating Systems</PostTitle>
                
                <div>
                <AuthorDetails>
                    <AuthorAvatar src={logo} />
                    <div>
                        <AuthorName>Toshant narula</AuthorName>
                        <PostDate>
                            1Oct 3 Min Read .
                        </PostDate>
                    </div>
                </AuthorDetails>
                </div>

                <Markdown>
                Reliability is one of the desirable features, a general purpose operating system is expected to display. Indeed an unreliable system is not of much use. Through this blog, we would be examining what is reliability, and the ways in which the reliability of an operating system can be increased. One should remember that reliability is not an “add on” or an extra feature to an operating system, but it is a necessary requirement which must be considered from the earliest stages of operating system design.
         
          </Markdown>
            <br/>
            <br/>
          

            <Markdown>
            ## What is reliability?
            </Markdown>


        


            <Markdown>
            Cambridge Dictionary defines reliability as “the quality of being able to be trusted or believed because of working or behaving well”. Similar to its literal meaning reliability of an operating system refers to the degree to which it meets its specifications in respect of services to its users, even when subjected to unexpected and hostile conditions. The ideal case would be that the operating system is completely free of errors, and able to handle all contingencies. But in practice this is never the case. Also note that reliability is a relative term rather than an absolute concept. No operating system can be totally reliable. Take an extreme example, it would be impossible to provide service in the case of simultaneous failure of all hardware components of the computer. But the main ingredient is that a more reliable operating system will continue to meet its specification even under great pressure from hardware malfunctions and(or) user errors whereas a less reliable system may depart from its defined specifications when subjected only to a few meaningless requests.
            </Markdown>


            <br/>
            <br/>

            <Markdown>
            ##Why reliability is needed?
            </Markdown>



            <Markdown>
            An operating system is a complex piece of software which is expected to perform a variety of functions for a diverse set of users. It is important to the users that these functions are performed correctly. As the finished product will not be operating in a perfect world, it is likely to be subjected to a large variety of circumstances which could adversely affect its functioning. Such circumstances include malfunction of the hardware of the host computer, errors in procedure by the computer operators, and illegal or meaningless requests supplied by the user. An reliable operating system should continue providing service, possibly of a lesser quality, even in the case of such adverse circumstances.
            </Markdown>


            <br/>
            <br/>


            <Markdown>
            ## Reliability vs Correctness
            </Markdown>

            

            

            <Markdown>
            The notions of reliability and correctness of operating systems are related but are distinct. An operating system is correct if when running in a specified environment it exhibits a specified (desired) behavior. Correctness is certainly a desirable attribute of an operating system, but it is insufficient for ensuring reliability. This is because demonstrations of correctness, whether by testing or by formal proof, rely on assumptions about the environment which are generally invalid. Such assumptions typically concern the nature of inputs and the correct functioning of hardware, and may be quite unjustified in practice. Putting it another way, the environment in which a system operates rarely matches that which is assumed in the demonstration of correctness.
            </Markdown>
            <br/>
            <br/>

            <Markdown>
            ##How can reliability be expressed ?
            </Markdown>


            
            <Markdown>
            Before reaching the concrete areas we need to learn about some terminologies. An error to defined be a deviation of the system from its specified behavior. Thus an error is an event for example the allocation of an unshareable resource between two processes, or the deletion of the directory entry for a file which is still being used. An error may be caused by a hardware malfunction, by the unanticipated action of a user. And a fault is the cause of an error. When an error occurs it is probable that some items of information within the system are corrupted. Such corruption is defined as the damage caused by the error; damage can possibly result in faults which can lead to further errors. Now using these basic terminology we can express the methods and techniques for increasing reliability of operating systems, which are :
            </Markdown>


            <br/>
            <br/>



 

            <Markdown>
1. Fault Avoidance: Elimination of any kinds of faults in the design and implementation stages of the operating system or in other words, production of a correct system.
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            2. Error Detection: Detecting any kind of errors as soon as possible in order to reduce the damage caused before its consequences spread and affect other parts of the system.
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            

            3. Fault Treatment: Identification and elimination of any fault which can produce an error in the system when subjected to certain conditions.
            </Markdown>
            <br/><br/>

            <Markdown>
            4. Error Recovery: Assessment and Repair of any kind of damage resulting from an occurrence of an error in the system
            </Markdown>
            <br/><br/>

            <Markdown>
            This was the basic introduction for reliability of operating systems and how one can increase the reliability of a system. We would be covering in detail each of the above four areas in the next blogs.
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

            #### Till then keep exploring 
            </Markdown>

            <br/><br/>

            





                <CommentsSection comments = {comments}/>
            </PostContainer>
        </div>
    )
}


export default Blog3;