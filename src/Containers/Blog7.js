import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate,  BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
// import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';


import 'katex/dist/katex.min.css';


const comments = [{
    id:1,
    body: "Very Nice Blog",
    author:{avatarUrl:"/blog1"},

    }
]


// const Markdown1 = (props) => <ReactMarkdown {..._mapProps(props)} />;

const Blog7 = () => {


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
                <PostTitle>Error Detection and Error Recovery
</PostTitle>
                
                <div>
                <AuthorDetails>
                    <AuthorAvatar src={logo} />
                    <div>
                        <AuthorName>Toshant Narula</AuthorName>
                        <PostDate>
                            20 sept 5 Min Read .
                        </PostDate>
                    </div>
                </AuthorDetails>
                </div>


    









                <Markdown>
                ##Error Detection
         
          </Markdown>
   
          <Markdown>
          Error detection refers to finding out the error - the deviation from a component's specified behaviour. The key component of error detection is redundancy - that is, the we provide some kind of 'superfluous' or extra information which can be used to check the validity of the 'main' 
          information contained within the system. 
The redundant' information used for checking is most of the times useless as far as the main system are concerned. One can use redundant information such as parity bits - we add one more bit along with the block of data so that the resultant new block statsifies a certain constraint. Checksums can also be used for error detection in the hardware sphere. Encoding is also one of some useful means of error detection, and in some cases can be used for recovery as well.
          </Markdown>
  
          <br/>
            <br/>
            <Markdown>
            Errors detected by the hardware may be masked by the hardware itself, or they may be reported to the operating system by means of traps into the first-level interrupt handler. Examples of the latter type of error are arithmetic 
overflow, memory violation, and protection violation. Error detection may also be undertaken by the operating system itself.  A common form of checking is for processes to check the consistency of the data structures they use.  An example of this might be for the processor queue to be held as a doubly linked list and for the scheduler to trace the links both forwards and backwards whenever it accesses the queue. 
The redundant information provided in this case is the set of backward links: only the forward ones are required for the main scheduling and dispatching algorithms. 
Another example is checking of the table modifications by maintaining in the table a checksum of all its entries. When an entry is modified the effect on the checksum can be predicted by calculation. If the checksum after modification does not correspond to that predicted then one can conclude that an error has occurred during modification.
            </Markdown>


            <br/>
            <br/>


            <Markdown>
            A generalised version of this form of checking can be to associate with each major action of a process an acceptance test which can be used as a criterion of whether the action has been properly performed. The acceptance test is a Boolean expression which is evaluated (as part of the process execution) after the action 
is completed. If the result is 'true' the action is considered to have been performed correctly and the other hand if it is 'false' an error has occurred. The acceptance test can be as stringent as is deemed necessary; it will be formulated to check for those errors which the designer feels are most probable. 
As an example consider the action of the scheduler in periodically modifying process priorities and re-ordering the processor queue. The acceptance test for this operation may be simply that the process descriptors in the re-ordered queue are indeed in priority order. A more stringent acceptance test contains the additional constraint that the number of descriptors in the queue is the same as before, thus guarding against the inadvertent detachment or duplication of a descriptor. 
There is of course usually a trade-off between the stringency of an acceptance test and the overhead of performing it, a trade-off which applies to all error-detection mechanisms. The designer must weigh the costs, in capital equipment or performance degradation, against the benefits accruing. 
Unfortunately, it is often the case that neither costs nor benefits can be accurately measured. So far we have dealt only with errors which occur within a single hardware or software component. Errors which occur at the boundary between components are more difficult to detect, but some advantage can be gained from checking the credibility of any information passed across a boundary. 
For example, some procedure parameters can be checked to see that they fall within an appropriate range, and it may be possible to check that messages passed between processes conform to some established protocol.
            </Markdown>


            <br/>
            <br/>


            <Markdown>
           ##Error recovery
            </Markdown>

            <Markdown>
            Recovery from an error involves assessment of the damage which has been caused, followed by an attempt to repair it. Damage assessment may be based entirely on a priori reasoning by the investigator, or it may involve the system itself in performing a number of checks to determine what damage has occurred. In either case, assessment (like fault identification) will be guided by assumed causal relationships defined by the system structure. An error in updating a file directory can, for example, be expected to damage the filing system but not the process structure or the device descriptors. There is of course a danger that the system structure, and hence any assumed relationship, will itself be damaged, but the probability of this happening is greatly reduced if appropriate hardware protection mechanisms are employed.
The usual approach to repairing damage is to reverse, or roll back, the affected processes to a state which existed before the error occurred. This approach relies on the provision of recovery points (or checkpoints) at which sufficient information is recorded about the state of the process to allow it to be reinstated later if necessary. The information required is at least the volatile environment and a copy of the process descriptor; it may also include a copy of the content of the memory space used by the process. The interval between recovery points determines the amount of processing which is likely to be lost when an error occurs. The loss of information after an error can be reduced by audit-trail techniques, in which all modifications to the process state are logged as they occur. Error recovery then consists of rolling back to the last recovery point and then making the state changes indicated by the audit log. Audit-trail techniques are analogous to the incremental dump of a file system, in fact the incremental dump can be viewed as a particular audit-trail mechanism. 
</Markdown>
<br/>
            <Markdown>
            Recovery points and audit-trails imply the recording of all state information and all modifications to it. An interesting alternative is the recovery block scheme, in which the only state information recorded is that which is actually modified. A recovery block is a section of program with the following structure 
</Markdown>
<br/>

            <Markdown>
                ensure acceptance test by           
                primary alternate
          </Markdown>

<br/>
<Markdown>
   elseby
         secondary alternate
         </Markdown>

<br/>
<Markdown>
   elseby
         other alternate and so on
         </Markdown>

<br/>
   

            <br/>
            <br/>

            <Markdown>
            The primary alternate is the program fragment which is normally executed; the other alternates are used only if the primary alternate fails. Success or failure of an alternate is determined by the execution of the acceptance test associated with the block. Thus execution of the recovery block first involves execution of the primary alternate, followed by execution of the acceptance test. If the test passes, which is the normal case, the entire block is deemed to have been executed successfully. If the test fails, the process state is restored to that which existed before the primary alternate was executed, and the secondary alternate is then executed. The acceptance test is again used to determine success or failure, and further alternates are invoked as necessary. If all alternates fail then the block as a whole is said to fail, and recovery has to be made by invoking an alternate block if there is one (recovery blocks may be nested to any depth), or by restarting the process if not. 
            The alternates within a recovery block can be viewed as software spares which are automatically utilised whenever the primary alternate fails. Unlike hardware spares the alternates are not of identical design, and usually employ different algorithms. The primary alternate employs the most efficient or otherwise desirable algorithm for fulfilling the function of the block; the other alternates employ less efficient algorithms, or algorithms which fulfil the desired function in only a partial, but still tolerable, fashion. Failure of an alternate is regarded as an exceptional occurrence (akin to an error due to a transient hardware fault), and the alternate is replaced only for the current execution of the block. It is wise, however, to log all failures, so that residual design and programming faults can be recognised and eliminated.
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            
            The recovery block scheme relies for its operation on the ability to restore a process state whenever an acceptance test fails. The ease of doing this depends on whether the process concerned has interacted with other processes during execution of the block. If it has not, restoration of its state reduces to restoring the prior values of all program variables and registers which have been changed. This can be effected by means of a 'recovery cache', a portion of memory in which values are stored before being modified.
Only those values which are modified need be stored in the cache, and values which are modified several times need be stored only once. Failure of an alternate causes the restoration of values from the cache before the next alternate is tried; success of an alternate leads to the deletion of values from the cache, since the modifications can now be regarded as valid. The nesting of recovery blocks is catered for by organising the cache in a manner similar to a stack.
The case of process interaction within a recovery block is more difficult to handle. A possible approach is to regard any interaction between two processes as a 'conversation' between them. If one of the processes has to be rolled back during a conversation then so must the other, since the information transmitted in the conversation may have been erroneous. Thus neither process may proceed beyond the end of a conversation until both have passed acceptance tests at its conclusion, and failure or either acceptance test results in the rollback of both processes to the start of the conversation. The idea can be extended to simultaneous conversations between several processes.
            </Markdown>
            <br/><br/>

                <CommentsSection comments = {comments}/>
            </PostContainer>
        </div>
    )
}


export default Blog7;