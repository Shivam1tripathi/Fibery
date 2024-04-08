import React from 'react'
import Layout from '../Component/Layout/Layout'
import Heading1 from '../Component/Page1/Heading1'
import Signup from '../Component/Page1/Signup'
import Imagecase from '../Component/Image-case'
import Page2 from '../Component/page 2/Page2'
import Warningform from '../Component/Warningform'
import Feedback from '../Component/Feedback'
import Cardf from '../Component/Cardf'
import Stepsform from '../Component/stepsform'
import Signupcomponent from '../Component/Signupcomponent'
import Ricecomponent from '../Component/Ricecomponent'
import Responsive from '../Component/Slider'


const Main = () => {
  return (
    <Layout>
{/*================================================Page1============================== */}
        <Heading1/>
        <Signup/>
{/*===============================Imagecase===============================*/}
        <Imagecase/>
{/*===========================Page1============================================== */}
        <Page2/>
   {/* ===============================Product Area==================================== */}
   <div className='min-h-96 flex justify-center'>
   <img className='max-sm:w-96 max-sm:h-80' src="Images/Product_area.png" alt="Product_area" />
   </div>

{/* ==============================warning 1================================================== */}

   <Warningform para={"Do you have the permission (or forgiveness) from your team to replace some of their tools?"} emoji1={"👍"} emoji2={"🙀"} bgcolor={"bg-pink-100"}/>
   
   {/* ==============================Feedback 1================================================== */}

   <Feedback feedback={`"We were finally able to have product planning, high-level executive views, marketing initiatives, content calendars, and async meeting organization all in one place while all referencing  the same underlying data."`} username={"Jason Williams"} postion={"Director,Product & Growth"} profileimage={"Images/Feedbackjason.png"} companylogo={"Images/Image-case/Plex.png"} bgimage={'Images/familybeach.jpg'} button={"Check out customer story"}/>
   
   {/* =====================================cardf 1========================================== */}
   
   <Cardf Title={"Flexibility to work your own way"} para={`Stop using workflows & terminologies defined by someone else... not everything is an "issue" or a "task"`} image1={"Images/Susilunch.png"} image2={"Images/ProcessMap.png"}/>
   
   {/* ==============================warning 2================================================== */}
  
   <Warningform para={"We give you the basic building blocks: relation databases, visualizations, automation rules, rich-text editor, etc. but you need to have an idea of how your team operates."} emoji1={"🫸"} emoji2={"🤔"} bgcolor={"bg-purple-100"}/>
 
 {/* ==============================Feedback 2================================================== */}

 <Feedback feedback={`"I had tried coda, Notion, and a bunch of other similar tools, but the problem always was that it felt like a system built by others. With Fibery, it feels like the oppsite . I build  the system, and it just  provides an interface to work with my data."`} username={"Dax"} position={"Co-founder at QuadSpinner"} profileimage={"Images/Dax.png"} companylogo={"Images/Image-case/QuadSpinner.png"} bgimage={'Images/familybeach.jpg'} button={"See full review"}/>

{/* =====================================cardf 2========================================== */}
   <Cardf Title={"Extract insights from all kinds of data"} para={`Charts & reports are weak  in almost all work management tools. if they're available at all`} image1={"Images/pinkball.png"} image2={"Images/Feature_Board.png"}/>

{/* ==============================warning 3================================================== */}

<Warningform para={"We won't teach you data analysis; so if you haven't done it before, you'll need to invest some time & effort."} emoji1={"👍"} emoji2={"😿"} bgcolor={"bg-green-100"} />
   
   {/* ==============================Feedback 3================================================== */}

 <Feedback feedback={`"Reports are great. you kinda need to get used to them for complex cases and set up your fieldsand entities properly, but when you do you can get so much information from your data."`} username={"Anton Oparienko"} position={"Coo"} profileimage={"Images/Dax.png"} companylogo={"Images/Image-case/Coo.png"} bgimage={'Images/familybeach.jpg'} button={"Check out customer story"}/>

 {/* =======================================normal help explain============================================ */}

 <div className=' min-h-96 w-5/6 md:pl-20 md:pr-20  max-md:pl-5 flex flex-col items-start '>
 <h1 className='text-4xl font-semibold mt-20'>How Fibery helps you...</h1>
        <img className='mt-5 w-full' src="Images/Features_Kanban.png" alt="" />
 </div>

 {/* ==================================Steps to make it happend============================================= */}

          <Stepsform/>

  {/* ==================================Sign up interface============================================ */}   

  <Signupcomponent/> 

    {/* ==================================Rice component============================================ */}  

  <Ricecomponent/>

 {/* ==================================Slider ============================================ */}  
 <Responsive/>
    </Layout>
  )
}

export default Main