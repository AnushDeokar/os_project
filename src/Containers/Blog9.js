import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate,  BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
// import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';
// import img1 from './blog1img1.PNG'

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
                <PostTitle>Fault Avoidance and Fault Treatment</PostTitle>
                
                <div>
                <AuthorDetails>
                    <AuthorAvatar src={logo} />
                    <div>
                        <AuthorName>Toshant Narula</AuthorName>
                        <PostDate>
                            1 Dec 5 Min Read .
                        </PostDate>
                    </div>
                </AuthorDetails>
                </div>


    









                <Markdown>
                As it is known that, faults in a computer system may stem from the hardware or from 'bugs' in the software. The various ways of avoiding each of these types of fault are discussed next.

          </Markdown>
            <br/>
            <br/>
 

            <Markdown>
            1. Hardware faults 
            </Markdown>


            <br/>
  


            <Markdown>
            The most obvious way of reducing the incidence of hardware faults is to use the most reliable components which can be obtained within the overall cost constraints. Hardware designers use several methods of enhancing reliability, ranging from the obvious - using individually reliable components - to more complex techniques which incorporate some form of error detection and recovery within each subsystem. Error detection is usually based on the recording or transmission of redundant information, such as parity bits and checksums; recovery is often attempted by repeating the operation which gave rise to the error. Examples of this technique are magnetic tape and disk drives which are designed to repeat operations a limited number of times if either parity or checksum problems occur. Retrying operations is of course useful only for transient faults (that is, faults which are due to temporary conditions such as interference or dust particles); permanent faults will still result in errors. Another technique which is often used in data transmission is the use of error detecting and correcting codes, in which redundant information transmitted with the data provides a means of recovery from certain transmission errors. Yet another technique is that of majority polling, in which several (usually three) identical components are supplied with the same inputs and their outputs are compared. If the outputs differ the majority verdict is taken to be correct, and the component producing the minority verdict is noted as being suspect. A component which is repeatedly in the minority is assumed to be faulty and can be replaced. Majority polling is an expensive reliability technique since it relies on replication of components and it is normally used only when really high reliability is essential.

            </Markdown>


            <br/>
            <br/>


            <Markdown>
            2. Software faults
            </Markdown>


            <br/>
   

            <Markdown>
            

            There are several complementary approaches to reducing the incidence of software faults. We discuss three of the principal ones next. The first approach is to adopt management practices, programming methodologies and software tools which are a positive aid towards producing a fault free product. In the mid 1960s it was believed in some quarters that the larger the piece of software to be produced the more programmers should be assigned to it. IBM's experience with huge armies of programmers on OS/360 exploded this myth, and it is now realised that indiscriminate application of manpower is likely to create more problems than it solves. The grouping of programmers into small teams, popularly known as 'chief programmer teams', is now considered a better way of organising software production. Each team is responsible for a module of software which has precisely defined external specifications and interfaces, and within the team each member has a welldefined function, such as coding, documentation, or liaison with other teams.
</Markdown>
<br/>
            <Markdown>
            The way in which programmers actually go about writing programs can have considerable influence on the quality of the finished product, in terms of coherence, comprehensibility and freedom from faults. Several programming methodologies have been advocated, the most widely known being structured programming. The software tools which are of most help in creating a fault-free product are probably an editor, a macro-assembler, and a compiler for a suitable highlevel language. The only parts of an operating system which need to be written in assembly language are those which are intimately bound up with the host hardware, namely parts of the nucleus and the I/O device handlers. The use of a high-level language for the rest of the system speeds up the production of useful code and facilitates the elimination of faults. It is sometimes said that high-level languages are unsuitable for writing operating systems since the object code produced is less efficient in execution than the corresponding handwritten code. There are at least three counters to this view: first, that a good optimising compiler can often produce better code than a good assembly language programmer; second, that areas of residual efficiency can if necessary be optimised by hand; and third, that reliability is at least as important a goal as efficiency.

</Markdown>
<br/>

            <Markdown>
            The second general approach to reducing the incidence of software faults is to attempt to prove, by more or less formal means, that all programs in the operating system, and all their interactions, are correct. This is a formidable task, which for large systems is beyond the current state of the art. However, pioneering work by Floyd (1967), Hoare (1972) and Dijkstra (1976) has opened up the possibility of such proofs being possible in the not-too-distant future. Even now, a great deal of confidence in the correctness of a system can be inspired by proofs of correctness for some of its component programs. The most popular approach to proving program correctness is to formulate assertions (usually expressed in predicate calculus) which are to be true at various stages of program execution. The proof then proceeds inductively from the assumption of the initial assertion to verification that execution of the program statements does indeed make the subsequent assertions true. The chief difficulties encountered are the formulation of appropriate assertions, and the rather laborious step-by-step proof of their truth.  The third approach to eliminating software faults is by means of systematic testing. Testing has always been a prime method of detecting faults, but there is surprisingly little agreement on an appropriate methodology. Ideally, one would like to test a program on all possible inputs, but this is clearly impractical; all one can hope for is that the test data chosen will reveal all remaining faults. There is no general way of selecting test data to do this, though several pragmatic guidelines have been proposed. One such guideline is to select test data which will exercise all possible paths through the program. Another is to select data which lie at the extremes of the allowable ranges: for example, zero is an obvious choice in any situation where the inputs can range over the positive integers.
           </Markdown>

            <br/>
            <br/>

            <Markdown>
            The difficulty of testing is compounded when a large number of programs are to be executed by several interacting processes, as is the case in an operating system. Not only must each program be tested, but so must the interfaces between different programs and processes. The only hope of doing this at all successfully is to keep the interfaces as simple as possible. We can summarise this discussion by saying that none of the approaches outlined above - programming methodology, formal correctness proofs, and testing- can be relied on to yield a fault-free product.
           </Markdown>

            <br/>
            <br/>

            <Markdown>
            

            ##Fault treatment        </Markdown>
            <br/><br/>
            <Markdown>
            Treatment of a fault first involves locating it, and then repairing it. The detection of an error and location of the corresponding fault are not at all the same thing. An error may have several possible causes, located in either the hardware or the software, and none of them may be apparent. One of the main aids to fault identification is the detection of errors before their cause is obscured by consequent damage and further errors. Thus the early detection of errors, is of prime importance. In some cases it may be possible to take the easy option of ignoring the fault altogether, but this involves assumptions about the frequency of the errors it can cause and the extent of their damage. Usually, however, it is important that a fault be located and dealt with. The search for a fault will generally be directed by the investigator's understanding of the system structure. If this is incomplete, or if the fault has affected the structure, then the investigator's task is difficult indeed.
        </Markdown>
            <br/><br/>

            <Markdown>

            One way of helping the investigator is for the system to produce a trace, or log, of its recent activity. Events recorded in the log might be process activations, procedure entries, 1/0 transfers, and so on. Unfortunately the amount and detail of information recorded must be very large if the log is to be of practical value, and the overhead of recording it can be very high. Some advantage can perhaps be gained from making the trace optional, so that it need be switched on only when there is reason to believe that the system is malfunctioning. It is also worth while making the trace selective, so that only those parts of the system which are suspect need log their activities. This of course requires a subjective judgement (itself prone to error), of which are the suspect parts. Once a fault has been located its treatment involves some sort of repair. In the case of hardware faults repair usually comprises the replacement of a faulty component. This may be done manually or automatically, depending on the ability of the hardware to locate its own faults and 'switch out' a faulty component. Manual replacement may involve taking the entire system out of service for a time, or, preferably, it may proceed in parallel with continued service, possibly at a degraded level. Repair of a disk drive, for example, should not interrupt normal service if other drives are available, but replacement of a printed circuit board in the central processor of a single CPU system will probably require a complete shutdown and restart.
        </Markdown>
            <br/><br/>

            <Markdown>

            Faults in software components arise from deficiencies in design and implementation, or from corruption caused by previous errors. Unlike hardware, software does not usually suffer from faults due to ageing. Removal of a design or implementation fault usually involves the replacement of a (hopefully small) number of lines of program, while a corrupted program can be replaced by a backup copy held elsewhere. The repair of corrupted data is a topic we shall leave to the next section, which deals with error recovery generally.
            </Markdown>

            <br/><br/>

            



                <CommentsSection comments = {comments}/>
            </PostContainer>
        </div>
    )
}


export default Blog1;