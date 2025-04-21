import { React, useState, useRef, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { Link, useNavigate, } from 'react-router-dom'
import { motion } from "framer-motion"
import './Pottery.css'
import BookingWidget from './BookingWidget';
import Contact from './Contact';
import photo161 from './images/photo161.jpg'
import photo162 from './images/photo162.jpg'
import photo163 from './images/photo163.jpg'
import photo164 from './images/photo164.jpg'
import photo165 from './images/photo165.jpg'
import photo174 from './images/photo174.jpg'
import photo180 from './images/photo180.jpg'
import photo181 from './images/photo181.jpg'
import photo182 from './images/photo182.jpg'
import photo183 from './images/photo183.jpg'
import photo186 from './images/photo186.jpg'
import photo187 from './images/photo187.jpg'
import photo189 from './images/photo189.jpg'
import photo190 from './images/photo190.jpg'
import photo191 from './images/photo191.jpg'
import photo194 from './images/photo194.jpg'
import photo198 from './images/photo198.jpg'
import photo199 from './images/photo199.jpg'
import photo200 from './images/photo200.jpg'
import photo201 from './images/photo201.jpg'
import photo202 from './images/photo202.jpg'
import photo203 from './images/photo203.jpg'
import photo204 from './images/photo204.jpg'
import photo205 from './images/photo205.jpg'
import photo206 from './images/photo206.jpg'
import photo207 from './images/photo207.jpg'
import photo208 from './images/photo208.jpg'
import photo209 from './images/photo209.jpg'
import photo210 from './images/photo210.jpg'

import video9 from './videos/video9.mp4'
import video12 from './videos/video12.mp4'
import video13 from './videos/video13.mp4'

import { HiUserGroup } from "react-icons/hi";
import { FaPaintBrush } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiCalendarHalfYear } from "react-icons/gi";
import { PiFlowerLotusBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";


export default function Pottery(props) {

  const [dragConstraint, setDragConstraint] = useState(0);

  const carusel = useRef();

  useEffect(() => {
    const updateDragConstraint = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDragConstraint(-700); // גרירה מקסימלית במובייל
      } else {
        setDragConstraint(-4521); // גרירה מקסימלית בדסקטופ
      }
    };

    updateDragConstraint();
    window.addEventListener('resize', updateDragConstraint);

    return () => {
      window.removeEventListener('resize', updateDragConstraint);
    };
  }, []);

  const potteryPhotos = [,
    //  photo209, photo210,
     photo203, photo202, photo199, photo198, photo200, photo201, photo162, photo189, photo190, photo180,
    photo181, photo182, photo183, photo194, photo164, photo165, photo186, photo187, photo191,]


    const scrollToBottom = () => {
      window.scroll({
        top: 50000,
        behavior: 'smooth'
      });
    };

  return (
    <div id='mainDivPottery'>
      <br /><br /><br /><br />

      <FadeIn>
        <div id='headLine'>
          <h1> סדנאות קדרות </h1>
          
        </div>

        <div id='explainPotteryDiv'>
          <p id='explainPotteryText'>
            צרו יצירות קרמיקה בסדנה מיוחדת במינה. <br /> <br />
          הזמינו את משפחתכם, חבריכם או הקולגות שלכם לחוויה בלתי נשכחת של יצירה, אומנות וגילוי עצמי. <br /> בסדנה הייחודית שלנו, תתנסו בעבודה עם חומרי גלם איכותיים, תלמדו טכניקות מסורתיות ומודרניות,<br /> ותיצרו כלי קרמיקה ייחודיים בעבודת יד – בדיוק לפי החזון שלכם.
          <br /><br />

          
🔹 שימוש בציוד מקצועי ברמה הגבוהה ביותר <br />
🔹 הדרכה אישית ומקצועית ממומחים בעלי שם עולמי בתחום שימור העתיקות והמלאכות העתיקות <br />
🔹 חוויה יצירתית שמתאימה לכל רמות הניסיון – גם למתחילים! <br /><br />
 ובסיום? יצירות הקרמיקה המרהיבות שלכם ילכו איתכם הביתה  <br />
</p>   
        </div>
<Link className='CTA' id='CTAPottery' onClick={scrollToBottom}>לתיאום סדנא בהתאמה אישית</Link>

<div id='twoPotteryVideosAndIcons'>







  <div id='potteryIconsDiv'>

    <div className='potteryIconsMiniDiv'>
      <PiFlowerLotusBold   className='potteryIcons' />
      <p className='potteryIconsText'> מרגיע</p>
    </div>
    <div className='potteryIconsMiniDiv'>
      <FaPaintBrush className='potteryIcons' />
      <p className='potteryIconsText'>יצירה מיקצועית</p>
    </div>
    <div className='potteryIconsMiniDiv'>
      <FaHeart className='potteryIcons' />
      <p className='potteryIconsText'>גיבוש והנאה</p>
    </div>
    <div className='potteryIconsMiniDiv'>
      <FaHome className='potteryIcons' />
      <p className='potteryIconsText'>לוקחים הביתה</p>
    </div>
    </div>

    <div id='twoPotteryVideos'>
    <video id="video13" src={video13} autoPlay loop muted />
    <video id="video12" src={video12} autoPlay loop muted />
  </div>

 
  </div>









        <div id='caruselDivPottery'>
        <motion.div ref={carusel} id='caruselPottery' whileTap={{ cursor: "grabbing" }}>
          <motion.div drag="x" dragConstraints={{ right:0 , left: dragConstraint }} id='innerCaruselPottery'>
            {potteryPhotos.map((image, index) => {
              return (
                <motion.div id='itemPottery' key={index}>
                           <img src={image} alt='' />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>



  





        <div className="textPhotoContainerPottery"></div>
        <p id='textPhoto161'>קחו את יצירותיכם הביתה</p>
         
          <img id='photo174' src={photo204} alt="" />
   

     

      </FadeIn>




      <Contact />
    </div>
  )
}




