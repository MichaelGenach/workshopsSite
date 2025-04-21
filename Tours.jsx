import { React, useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import './Tours.css'
import Contact from './Contact';
import BookingWidget from './BookingWidget';
import FadeIn from 'react-fade-in';
import photo40 from './images/photo40.jpg'
import photo41 from './images/photo41.jpg'
import photo42 from './images/photo42.jpg'
import photo51 from './images/photo51.jpg'
import photo52 from './images/photo52.jpg'
import photo53 from './images/photo53.jpg'
import photo54 from './images/photo54.jpg'
import photo55 from './images/photo55.jpg'
import photo56 from './images/photo56.jpg'
import photo75 from './images/photo75.jpg'
import photo197 from './images/photo197.jpg'
import photo211 from './images/photo211.jpg'
import photo212 from './images/photo212.jpg'
import photo213 from './images/photo213.jpg'
import madregot from './videos/madregot.mp4'
import yam from './videos/yam.mp4'
import porfir from './videos/porfir.mp4'
import { MdOutlineRecommend } from "react-icons/md";
import { TbVip } from "react-icons/tb";
import { TbMapStar } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";



import { useRef } from 'react';
import { motion } from "framer-motion"

export default function Tours(props) {



    const photoTours = [photo56, photo213, photo212, photo211, photo55, photo75]


    const carusel = useRef()

    useEffect(() => {
        props.setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
    }, []);

    const scrollToBottom = () => {
        window.scroll({
            top: 50000,
            behavior: 'smooth'
        });
    }

    return (

        <div id='mainDivTours' >
            <FadeIn>
                <br /><br /><br /><br />

                <h1 className='toursTitle'> סיורים פרטיים </h1>
                <p className='toursTitle' id='toursText'>
                    
                    <br /><br /> 
                    <h3 style={{direction:'rtl'}}>גלו את קסמה של קיסריה העתיקה בסיור בלתי נשכח!</h3>
                    
                    הצטרפו אלינו למסע מרתק בזמן בין חומות העיר העתיקה, התאטרון הרומי, הנמל ההיסטורי והאתרים הקסומים של קיסריה. <br /> 
                    נגלה יחד את סודות הבנייה והארכיטקטורה העתיקה, נסייר ברחובות שדרכו בהם לגיונות רומאיים, ונשמע סיפורים מסעירים על תקופות מפוארות שעיצבו את ההיסטוריה של המקום. <br />
                    
                    הסיורים מועברים על ידי מדריך בעל רקע עשיר בעולם הארכיאולוגיה ושימור האתרים, העובד בחברה שהתמחתה בפרויקטים מורכבים, ביניהם שימור והובלת פסל פורפיר עתיק לתצוגה ברומא וחשיפת אתרים מרהיבים כגון פסיפס הציפורים בקיסריה. <br />
                    <br />
                    <h3>להתחבר לשורשים – היהדות בקיסריה כפי שלא הכרתם</h3> 
                    המדריך שימש כחלק מצוות השימור של הקטקומבה היהודית ברומא – פרויקט נדיר וחשוב בתחום המורשת היהודית. כעת, אתם מוזמנים להצטרף אליו לסיור מיוחד בקיסריה, ברוח הסיפור היהודי: נגלה את העבר היהודי של המקום, נצלול אל תוך אחת התקופות המשמעותיות ביותר של עמנו, ונכיר את המחקר והעדויות שמאחורי הקלעים – מזווית שלא תשמעו בשום מקום אחר. <br />

<br />
                    ניתן לשלב את הסיורים עם ביקור בגלריה אמנותית בקיסריה, הכולל <strong>הדגמת קדרות חיה</strong> וייחודית – חיבור מושלם בין סיפורים מרתקים למלאכה עתיקה. <br />
                    
                    הזמינו את המשפחה, החברים או הקולגות לחוויה סוחפת עם הדרכה מקצועית, ידע נדיר ואהבה גדולה לעבר – כי בקיסריה, כל אבן מספרת סיפור.
                    </p>
                    
                <Link className='CTA' id='CTATours' onClick={scrollToBottom}>לתיאום סיור בהתאמה אישית</Link>


                <div id='twoToursVideosAndIcons'>



                    <div id='toursIconsDiv'>

                        <div className='toursIconsMiniDiv'>
                            <TbVip className='toursIcons' />
                            <p className='toursIconsText'>סיור פרטי</p>
                        </div>
                        <div className='toursIconsMiniDiv'>
                            <MdOutlineRecommend className='toursIcons' />
                            <p className='toursIconsText'>מטיילים ממליצים</p>
                        </div>
                        <div className='toursIconsMiniDiv'>
                            <TbMapStar className='toursIcons' />
                            <p className='toursIconsText'>מסלול לבחירתכם</p>
                        </div>
                        <div className='toursIconsMiniDiv' >
                            <PiCertificate className='toursIcons' />
                            <p className='toursIconsText' > מורה דרך מוסמך</p>
                        </div>
                    </div>

                    <div id='threeToursVideosDiv'>
                        <video id="madregot" src={madregot} autoPlay loop muted />
                        <video id="yam" src={yam} autoPlay loop muted />
                        <video id="porfir" src={porfir} autoPlay loop muted />
                    </div>


                </div>

                <div id='caruselDivTours'>
                    <motion.div ref={carusel} id='caruselTours' whileTap={{ cursor: "grabbing" }}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -props.width }} id='innerCaruselTours'>
                            {photoTours.map(image => {
                                return (
                                    <motion.div id='itemTours' key={image}>
                                        <img src={image} alt='' />
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                </div>


                {/* 
                <img id='photo41' src={photo41} alt="" />
                <p className='photoText' >
                    סיורים פרטיים, וקבוצתיים
                </p>




                <img id='photo197' src={photo197} alt="" />

                <p className='photoText'>
                    מה הסיפור <br /> ?של המקום הזה
                </p>



                <img id='photo52' src={photo52} alt="" />
                <p className='photoText' >
                    סיורים באתרים נסתרים שסגורים לקהל
                </p>

 */}












            </FadeIn>

            <Contact />

        </div>

    )
}
