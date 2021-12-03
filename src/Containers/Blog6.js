import React from "react";
import CommentsSection from "./CommentsSection";
import { PostContainer, PostTitle, PostDate,  BackButton } from "../Components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../Components/Post/Author";
import logo from "../Components/avatar.png";
import Markdown from "markdown-to-jsx";
// import { HyperLink, CodeBlock } from '../Components/Markdown/Overrides';
import img1 from './blog6img1.PNG'
import img2 from './blog6img2.PNG'
import img3 from './blog6img3.PNG'
import img4 from './blog6img4.PNG'
import 'katex/dist/katex.min.css';


const comments = [{
    id:1,
    body: "Very Nice Blog",
    author:{avatarUrl:"/blog1"},
    },{
    id:2,
    body: "Nice Review",
    author:{avatarUrl:"/blog1"},
    }
]



const Blog6 = () => {


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
                <PostTitle>Case Study on Reliability Assessment</PostTitle>
                
                <div>
                <AuthorDetails>
                    <AuthorAvatar src={logo} />
                    <div>
                        <AuthorName>Toshant Narula</AuthorName>
                        <PostDate>
                            30Nov 5 Min Read .
                        </PostDate>
                    </div>
                </AuthorDetails>
                </div>


                <Markdown>
            ##Introduction
         
          </Markdown>
            <br/>
            <br/>
          <Markdown>
          In this blog, we will be looking at a method for empirically estimating reliability of operating systems presented in a recent research paper. The literature tells us that the main cause of failures in computer systems are defects in the software but still there has not been enough research about estimating reliability of operating systems. By analyzing the data about failures, collected from different machines with different environments, researchers have tried to build a method for the estimation of reliability of systems. 
          </Markdown>
           <br/><br/>
            <Markdown>
            They used a bit different approach than the existing methods, previous studies on the same area. They have analyzed the concept of operating system reliability from the user perspective. Whereas earlier only the failure occurred at the kernel space we considered as OS failures. The drawback of this approach was that it did not represent the actual user experience in terms of system failure perception. For ex. if an important user-space OS application is the window manager, which is present in operating systems with graphical user interface. A failure in one or more of these OS applications may prevent the ordinary user from running programs, accessing files, or even moving the mouse pointer. For the user, it does not matter whether the OS failure took place at user space or kernel space, the fact is that, from the user’s perspective, the operating system has crashed, partially or completely. Thus the authors proposed an approach in which OS failures are considered to occur not only at the kernel space but at user space (in OS services and OS applications) as well.
            </Markdown>


            <br/>
            <br/>


            <Markdown>
            ## Methods Employed
            </Markdown>


            <br/>
            <br/>


            <Markdown>
            They used a Microsoft Windows 7 operating system as their subject due to its popularity. They distributed the OS failures fall into three categories: 
1) OS Kernel (OSKNL) - failures in OS kernel subsystems, 
2) OS Services (OSSVC) - failures in OS service components, and 
3) OS Applications (OSAPP)- failures in OS processes that perform administrative tasks.


            </Markdown>


            <br/>
            <br/>

            <Markdown>
            

            They identified the OS components (i.e., OS kernel subsystems, OS services, and OS applications) that have failed the most per category. And further dividing categories based on failure types & types into subtypes. Based on this analysis, they estimated the probability distribution of the time between failures for each component identified. In order to choose the distributions with good fit to the data set of OS failure times, they applied the Akaike Information Criterion (see references). Based on the selected best-fit probability distributions, they created stochastic models to analyze the reliability of the operating system investigated. The modeling method adopted was the Reliability Block Diagram (RBD) (see references). The RBD model proposed was elaborated hierarchically in two levels, in which the top level is composed of blocks representing the three OS failure categories. The second level represents the main failed OS components of the three categories, which were the most observed in the failure data set analyzed. Based on the RBD models built, they calculated different reliability metrics and carried out a sensitivity analysis of the operating system’s reliability with respect to its modeled components which allowed them to identify the components that showed the lowest and highest reliability degrees in each of the categories. The two levels of RBD are as follows:

</Markdown>
<br/>
<img src={img1} alt=""/>
            <Markdown>
##Results
</Markdown>
<br/>

            <Markdown>
            After analysing the time between failures (TBFs) of the main OS components from the three OS failure categories researchers noted that the mean time between failures (MTBF) of the OSKNL category is longer than other categories, while the OSAPP category presented the failure type (AF2) with the shortest MTBF. Also, they verified that some OS components had TBFs equal to zero, which suggests either the occurrence of multiple and successive failures of the same OS component or the failure of multiple instances of the same OS component that were executing simultaneously. Based on the numerical analysis of the AIC results, and the graphical analysis of the distribution curve fitting, they found the probability distribution for common categories, types etc. are listed in the following table.
            </Markdown>

            <img src={img2} alt=""/>
            <br/>
            <br/>

            <Markdown>
            ### Reliability Modeling and Reliability Calculation


            </Markdown>

            <br/>
            <br/>

            <Markdown>
            

            Authors used a two-level hierarchical RBD as a reliability modeling method, where the first level was composed of three reliability blocks arranged, reliability-wise, in series, in which each block represents one of the three OS failure categories (OSKNL, OSSVC, and OSAPP). Thus, failures in any OS component from these categories result in the OS failure. One should note that all OS failures, within the same category and among categories, were considered to take place independently. 
In order to compute the system’s reliability, ROS, one first needs to estimate individual reliabilities of each block, in all categories KF1,...KF3, SF1,...SF3, AF1...,AF3, as well as their combination in series in their respective categories. The reliability of a given block, b, is calculated from the reliability function estimated for the block, Rb(t)$, based on the time between failures density function, f(.), for the respective OS component, using the following equation.

            
            </Markdown>
            <img src={img3} alt=""/>
            <br/><br/>
            <Markdown>
            In the RBD model, they found these density functions as the best goodness-of-fit: Exponential, Lognormal, Levy, and Log-Logistic. Based on the reliability function of each block, Rb(t), the reliability at the model’s second level is computed. The reliability of other components can also be estimated by changing the density function involved. Considering that the reliability blocks in each OS failure category (OSKNL, OSSVC, and OSAPP) are arranged reliability wise in series, the reliability of each category followed the same structure following equation, which represents the reliability of the OS Kernel category, RKNL(t).
            </Markdown>
            <br/>

            <Markdown>

            RKNL(t) = RKF1(t) x RKF2(t) x RKF3(t)
            </Markdown>
            <br/>

            <Markdown>

            And, the overall OS reliability can be given by - 
            </Markdown>

            <br/>

            <Markdown>

            ROS(t) = RKNL(t) x RSVC(t) x RAPP(t)
            </Markdown>

            <br/><br/>


            <Markdown>

            They estimated the OS reliability and components reliabilities, for various mission times for ex. 4, 8, 12, 24, 48, 168, and 720 hours. They compared this new reliability estimation method with the traditional ones and the results were as follows -
            </Markdown>

            <img src={img4} alt=""/>
            <br/><br/>




            <Markdown>
            

            It is evident that in the traditional approach (dashed line) the OS reliability was higher; nevertheless, as mentioned earlier that this result is not representative of the real user experience since, from his or her perspective, the OS reliability is affected by any failure that causes the impairment or interruption of its features or services instead of only those failures confined to the kernel space. Thus, the solid curve would better represent the OS reliability perception by the users. This can be observed in practice, for any OS, by comparing the reliability figures provided by the manufacturer (based on the traditional approach) with the actual users’ quality of experience regarding the OS reliability. Adopting reliability metrics estimated based on the three OS failure categories, and not only on kernel failures, allows the OS manufacturer to have more precise measures since they are closer to the real users’ perception.
            </Markdown>
            <br/><br/>
                        <Markdown>
                        ### Reliability Importance Index</Markdown>
            <br/>

            <Markdown>
            Another analysis carried out refers to the relative importance index of each component, IR, with respect to the system reliability. This index enables identifying the components that have the greatest impact in lowering system reliability, as well as quantifying their effects on the system
reliability. The reliability importance of ith component can be computed by taking the partial derivative of the previous equation defining ROS(t), with respect to the reliability of each category analyzed. It was noted that OSSVC is the category with the highest importance index on the system reliability, i.e., its components caused the greatest impact in lowering the OS reliability. 

            </Markdown>

            <br/>
            <br/>


            <Markdown>

            The Windows32 mechanism uses the following
            </Markdown>

            <br/><br/>



            <Markdown>
            

            ## References
            </Markdown>
            <br/><br/>
                        <Markdown>
                        1) Reliability Assessment of Commercial Off-the-Shelf Operating System Software: An Empirical Study: https://ieeexplore.ieee.org/document/8692042
Akaike Information Criterion - H. Akaike, “A new look at the statistical model identification,” IEEE Transactions on Automatic Control, vol. 19, pp. 716–723, Dec. 1974.

            </Markdown>
            <br/><br/>

            <Markdown>
            2) Reliability Block Diagram - R. Billinton, and R. N. Allan, Reliability Evaluation of Engineering
Systems: Concepts and Techniques, 1st ed., vol. 1. Springer US,
1983.

            </Markdown>


           
            <br/>
            <br/>





                <CommentsSection comments = {comments}/>
            </PostContainer>
        </div>
    )
}


export default Blog6;