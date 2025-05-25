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
                <h1 className='toursTitle'> סיורים מרתקים</h1>


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

                <a href="#contact" id='CTATours' className='CTA'>לתיאום מיידי </a>

                <p id='toursText'>
                    <section class="bg-gradient-to-b from-white to-gray-100 py-12 px-6 text-center">
                        <div class="max-w-3xl mx-auto">
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">🌅 דמיינו את זה...</h2>
                            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                                אתם משוטטים בין חורבותיה הקסומות של קיסריה העתיקה. כל אבן לוחשת סיפור מהעבר,
                                כל צעד מחבר אתכם לתרבות רומית מרהיבה.
                            </p>

                            <h3 class="text-2xl font-semibold text-gray-800 mb-3">🍷 ואז, עם שקיעת השמש…</h3>
                            <p class="text-lg text-gray-700 leading-relaxed mb-4">
                                נעצור מול נוף עוצר נשימה, שם יחכה לכם מגש טעימות עשיר:
                            </p>
                            <ul class="text-gray-700 text-lg list-none mb-6">
                                <li>🧀 גבינות בוטיק בעבודת יד</li>
                                <li>🍞 לחמים טריים וריחניים</li>
                                <li>🍷 יין משובח שיחמיא לכל ביס</li>
                            </ul>

                            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                                🎶 כל זה מלוּוה במוזיקה חיה שתעטוף אתכם באווירה מושלמת.
                            </p>

                            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                                🎨 ולסיום – הדגמת קדרות חיה! האובניים מסתובבים, החימר מתעצב,
                                ואתם עדים לרגע הקסם שבו חומר הופך לאמנות.
                            </p>

                        </div>
                    </section>

                    <h3> ✨ מה תקבלו בסיור?</h3>
                    ✅ חוויית סיור סוחפת שמחברת היסטוריה מרתקת לנופים מרהיבים<br />
                    ✅ תובנות מקצועיות על עולם הארכיאולוגיה ושימור האתרים<br />
                    ✅ סיפורים מרגשים שלא תמצאו באף ספר היסטוריה<br />
                    ✅ טיפים בלעדיים על המקומות הסודיים של קיסריה<br />
                    ✅ מדריך מוסמך ומומחה לשימור אתרים ארכיאולוגיים, שהשתתף בפרויקטים רבים –<br />
                    מהצלת ושימור פסיפס הציפורים בקיסריה ועד לשימור הקטקומבות היהודיות ברומא.
                    <br /> ✅ חוויה בלתי נשכחת!<br /><br />
                </p>





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


            <section class="pricing-section">
                <h2 class="pricing-title">🎟️ מחירים ותיאום סיורים</h2>

                <div class="pricing-grid">

                    <a href="#contact" className='pricingLink'>
                        <div class="price-card">
                            <h3>🏛️ סיורים מרתקים</h3>
                            <ul>
                                <li>📍 סיור קבוצתי: החל מ-500₪ לסיור </li>
                                <li>🕯️ סיור עששיות ערב: החל מ-500₪ לסיור </li>
                            </ul>
                        </div>
                    </a>
                </div>


                <p class="pricing-note">המחירים כוללים הדרכה מקצועית ואווירה מיוחדת מול הים 🌊</p>
                <a href="#contact" class="cta-button">📩 הזמינו עכשיו</a>
            </section>


            <Contact />

        </div>

    )
}
