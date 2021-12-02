import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate,  BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';
import img1 from './blog4img1.PNG'
import img2 from './blog4img2.PNG'
import img3 from './blog4img3.PNG'
import img4 from './blog4img4.PNG'
import img5 from './blog4img5.PNG'
import img6 from './blog4img6.PNG'


const comments = [{
    id:1,
    body: "Very Nice Blog",
    author:{avatarUrl:"/blog1"},

    }
]


const Blog4 = () => {


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
                <PostTitle>Using a Real-Time Operating System for Multitasking in Remote Patient Monitoring</PostTitle>
                
                <div>
                <AuthorDetails>
                    <AuthorAvatar src={logo} />
                    <div>
                        <AuthorName>Shantanu Bakshi</AuthorName>
                        <PostDate>
                            20Oct 3 Min Read .
                        </PostDate>
                    </div>
                </AuthorDetails>
                </div>

            <Markdown>
                ## Introduction
            </Markdown>
            <br/>
            <br/>
          

            <Markdown>
                One of the more interesting areas of application of real time operating systems is required to reduce overall healthcare costs and provide real time alerts for various acute diseases  ,thus improving the possibility of intervention before any casuality.
            </Markdown>        

            <img src={img1} alt=""/>
            <Markdown>
            The Operating Systems (OS) can be broadly divided into two classes (i) General Purpose Operating Systems (GPOS) and (ii) Real Time Operating Systems (RTOS). Members of the GPOS class use a ‘fair scheduling’ algorithm to ensure that all tasks get a fair share of execution time; they do not take into account the priority of the task being executed. This is done to provide high system throughput, but can result in higher priority tasks getting delayed waiting for lower priority tasks to finish. The RTOS class, on the other hand, uses a priority based scheduling algorithm, where higher priority tasks are preemptively scheduled ahead of lower priority tasks, ensuring higher priority tasks are not starved of CPU time. Not generating alarms in a timely manner can have catastrophic results for a patient. This makes the real-time performance of the local node a critical design parameter. 
            </Markdown>


            <br/>
            <br/>

            <Markdown>
            
In this paper a RTOS is specified that tries to meet the multithreaded (because of multiple users) environment of remote patient monitoring. 
This involves data collection and signal processing . It also demonstrates how a general Operating systems threads fail to process data with high priority and meet their deadlines.

            </Markdown>



            <Markdown>
            ## IMPLEMENTATION 
            </Markdown>
            <img src={img2} alt=""/>

            <br/>
            <br/>


            <Markdown>
           
This system has an RTOS which runs on the microcontroller and receives data through a wifi network and forwards it to the server .
The browser is used for display.

            </Markdown>

            

            

            <Markdown>
                Description of components :-
            </Markdown>
            <br/>
            <br/>



            <Markdown>
1. Sensors : transmit data at 1KHZ frequency .
            </Markdown>

            <br/>
            <br/>

            <Markdown>
            2. LocalNode : The QNX operating system , an RTOS  has been designed to cater to the real time deadlines since the health dat needs to be prioritized and processed within great restrictions of time .

            </Markdown>

            <br/>
            <br/>

            <Markdown>
            

            3. Fault Treatment: Identification and elimination of any fault which can produce an error in the system when subjected to certain conditions.
            </Markdown>
            <br/><br/>

            <Markdown>
            4. Central node : consists of the web server , used for organizing the sensor data, and provide a graphical interface.

            </Markdown>
            <br/><br/>

            <Markdown>
            ##SIMULATION
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

           
Our requirements are that the system must adhere to real time processing speed requirements . In the simulation data was received in batches of 1000 samples at a rate of 1 khz with a time limit of 1 second which was the time limit allocated. A basic power calculation operation was performed with the given data. 

            </Markdown>

            <br/><br/>

            <Markdown>
            1.Single thread results : this indicates handling of data by a single thread (sensor ) . This shows satisfactory time with avg 0.6 s 
            </Markdown>
              <img src={img3} alt=""/>

            <br/>
            <br/>

            <Markdown>
            2.Five thread results : here multithreading was performed and each thread exceeded  its 1 second threshold on average
            </Markdown>

            <img src={img4} alt=""/>
            <br/>
            <br/>

            <Markdown>
            3.Threads with 1 given higher priority : the higher priority thread gets executed much quicker then other threads 
            </Markdown>

            <img src={img5} alt=""/>
            <br/>
            <br/>

            <Markdown>
            4.Priority to all threads :
            </Markdown>
            <img src={img6} alt=""/>

            <br/>
            <br/>
            
            <Markdown>
                ## Conclusion
            </Markdown>
            <br/>
        
            <Markdown>
            In c and d  we see that due to being an RTOS the high priority threads were executed faster simulating a scenario in which several tasks need to be performed simultaneously, but only certain task are time-critical in nature. Priority assignment can be done using sensor selection and assigning priority to sensitive components. 

Also hierarchical priority (point d) can also be used to reduce network congestion since only high priority data is sent over the network . It can also preserve the processing of certain components like ECG data by selectively giving them high priority.

            </Markdown>

                <CommentsSection comments = {comments}/>
            </PostContainer>
        </div>
    )
}


export default Blog4;