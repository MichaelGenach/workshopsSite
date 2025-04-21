import { React, useEffect, useRef, } from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import './Company.css'
import { FaRegClock } from "react-icons/fa";
import BookingWidget from './BookingWidget';
import Contact from './Contact';
import FadeIn from 'react-fade-in';
import photo1 from './images/photo1.jpg'
import photo44 from './images/photo44.jpg'
import photo45 from './images/photo45.jpg'
import photo46 from './images/photo46.jpg'
import photo50 from './images/photo50.jpg'
import photo57 from './images/photo57.jpg'
import photo58 from './images/photo58.jpg'
import photo59 from './images/photo59.jpg'
import photo60 from './images/photo60.jpg'
import photo61 from './images/photo61.jpg'
import photo62 from './images/photo62.jpg'
import photo63 from './images/photo63.jpg'
import photo64 from './images/photo64.jpg'
import photo65 from './images/photo65.jpg'
import photo66 from './images/photo66.jpg'
import photo67 from './images/photo67.jpg'
import photo68 from './images/photo68.jpg'
import photo69 from './images/photo69.jpg'
import photo70 from './images/photo70.jpg'
import photo71 from './images/photo71.jpg'
import photo72 from './images/photo72.jpg'
import photo73 from './images/photo73.jpg'
import photo74 from './images/photo74.jpg'
import photo98 from './images/photo98.jpg'
import photo99 from './images/photo99.jpg'
import photo100 from './images/photo100.jpg'
import photo101 from './images/photo101.jpg'
import photo102 from './images/photo102.jpg'
import photo107 from './images/photo107.jpg'
import photo108 from './images/photo108.jpg'
import photo118 from './images/photo118.jpg'
import photo121 from './images/photo121.jpg'
import photo122 from './images/photo122.jpg'
import photo123 from './images/photo123.jpg'
import photo124 from './images/photo124.jpg'
import photo126 from './images/photo126.jpg'
import photo146 from './images/photo146.jpg'
import photo147 from './images/photo147.jpg'
import photo148 from './images/photo148.jpg'
import photo155 from './images/photo155.jpg'
import photo192 from './images/photo192.jpg'
import photo193 from './images/photo193.jpg'
import video10 from './videos/video10.mp4'
import video14 from './videos/video14.mp4'
import { HiUserGroup } from "react-icons/hi";
import { FaPaintBrush } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiCalendarHalfYear } from "react-icons/gi";



import { motion } from "framer-motion"
export default function Company(props) {


  const photoCompany = [
    photo64, photo45, photo192, photo63, photo193, photo118, photo121, , photo122, photo73, photo1, , , photo74, ,

    photo65,
    photo66, photo67, photo69, photo70, photo59, photo58, photo72, photo98, photo100, , photo101, photo107,
    photo71, photo126,]

  const carusel = useRef()

  useEffect(() => {
    props.setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
  }, []);

  const scrollToBottom = () => {
    window.scroll({
      top: 50000,
      behavior: 'smooth'
    });
  };

  return (


    <div id='mainDivCompany'>
      <FadeIn>
        <br /><br /><br /><br />
        <h1>סדנאות פסיפסים עבור חברות</h1>
        <p id='companyText'>הצטרפו לסדנת פסיפס ייחודית שבה תיצרו יצירת אומנות מרהיבה למשרד שלכם! בסדנה נחלק את הצוותים לקבוצות, כאשר כל קבוצה תעבוד על חלקים שונים של פסיפס גדול. לאחר מכן, נארגן את כל החלקים יחד ליצירה אחת שלמה ומרשימה.

          הסדנה מספקת חוויית יצירה משותפת ומאתגרת, ובסיום אנחנו, כמומחים בשימור עתיקות ופסיפסים, נדאג שהפסיפס יהיה יציב, יפה ומרהיב.

          הצטרפו אלינו ליצירת פסיפס מיוחד שישדר את ערכי החברה שלכם ויהפוך למרכיב אומנותי וייחודי במשרד!</p>

        <Link className='CTA' id='CTACompany' onClick={scrollToBottom}>לתיאום סדנא בהתאמה אישית</Link>

        <div id='twoCompanyVideosAndIcons'>

          <div id='companyIconsDiv'>

            <div className='companyIconsMiniDiv'>
              <HiUserGroup className='companyIcons' />
              <p className='companyIconsText'>חלוקה לקבוצות</p>
            </div>
            <div className='companyIconsMiniDiv'>
              <FaPaintBrush className='companyIcons' />
              <p className='companyIconsText'>יצירה מיקצועית</p>
            </div>
            <div className='companyIconsMiniDiv'>
              <FaHeart className='companyIcons' />
              <p className='companyIconsText'>גיבוש והנאה</p>
            </div>
            <div className='companyIconsMiniDiv'>
              <GiCalendarHalfYear className='companyIcons' />
              <p className='companyIconsText'>תוצאה משותפת</p>
            </div>
            
          </div>


          <div id='twoCompanyVideos'>
            <video id="video14" src={video14} autoPlay loop muted />
            <video id="video10" src={video10} autoPlay loop muted />
          </div>
        </div>



        <div id='caruselDivCompany'>
          <motion.div ref={carusel} id='caruselCompany' whileTap={{ cursor: "grabbing" }}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -props.width }} id='innerCaruselCompany'>
              {photoCompany.map(image => {
                return (
                  <motion.div id='itemCompany' key={image}>
                    <img src={image} alt='' />
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>






        <p className='textPhotoC' id='ovdimCompany'>עובדים בשיתוף פעולה</p>

        <img id='photo58' src={photo58} alt="" />








        <p className='textPhotoC'> סדנא חוויתית
          לקולגות שלכם  </p>
        <img id='photo50' src={photo50} alt="" />


        <br /><br /><br />




        <div id='photo46Div'>
          <p> פסיפס אשר נעשה על ידי עובדי חברת סוני במסגרת הסדנא שלנו</p>
          <img src={photo46} id='photo46' alt=" פסיפס שנעשה על ידי עובדי חברת סוני במסגרת הסדנא שלנו" />

        </div>




        <br />


      </FadeIn>








      <Contact />


    </div>



  )
}
