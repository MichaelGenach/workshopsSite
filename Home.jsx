import { React, useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate, } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import './Home.css';
import axios from 'axios';
import photo1 from './images/photo1.jpg'
import photo2 from './images/photo2.jpg'
import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'
import photo5 from './images/photo5.jpg'
import photo6 from './images/photo6.jpg'
import photo7 from './images/photo7.jpg'
import photo8 from './images/photo8.jpg'
// import photo9 from './images/photo9.jpg'
// import photo10 from './images/photo10.jpg'
import photo11 from './images/photo11.jpg'
// import photo12 from './images/photo12.jpg'
import photo13 from './images/photo13.jpg'
// import photo14 from './images/photo14.jpg'
import photo15 from './images/photo15.jpg'
import photo16 from './images/photo16.jpg'
import photo17 from './images/photo17.jpg'
import photo18 from './images/photo18.jpg'
import photo19 from './images/photo19.jpg'
import photo20 from './images/photo20.jpg'
import photo21 from './images/photo21.jpg'
// import photo22 from './images/photo22.jpg'
import photo23 from './images/photo23.jpg'
import photo24 from './images/photo24.jpg'
import photo25 from './images/photo25.jpg'
import photo26 from './images/photo26.jpg'
import photo27 from './images/photo27.jpg'
import photo28 from './images/photo28.jpg'
import photo29 from './images/photo29.jpg'
import photo30 from './images/photo30.jpg'
import photo31 from './images/photo31.jpg'
import photo32 from './images/photo32.jpg'
import photo33 from './images/photo33.jpg'
// import photo34 from './images/photo34.jpg'
// import photo35 from './images/photo35.jpg'
import photo36 from './images/photo36.jpg'
import photo37 from './images/photo37.jpg'
import photo64 from './images/photo64.jpg'
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
import photo97 from './images/photo97.jpg'
import photo103 from './images/photo103.jpg'
import photo104 from './images/photo104.jpg'
import photo105 from './images/photo105.jpg'
import photo106 from './images/photo106.jpg'
import photo109 from './images/photo109.jpg'
import photo110 from './images/photo110.jpg'
import photo111 from './images/photo111.jpg'
import photo112 from './images/photo112.jpg'
import photo113 from './images/photo113.jpg'
import photo114 from './images/photo114.jpg'
import photo115 from './images/photo115.jpg'
import photo116 from './images/photo116.jpg'
import photo117 from './images/photo117.jpg'
import photo119 from './images/photo119.jpg'
import photo120 from './images/photo120.jpg'
import photo125 from './images/photo125.jpg'
import photo127 from './images/photo127.jpg'
import photo128 from './images/photo128.jpg'
import photo129 from './images/photo129.jpg'
import photo130 from './images/photo130.jpg'
import photo131 from './images/photo131.jpg'
import photo132 from './images/photo132.jpg'
import photo133 from './images/photo133.jpg'
import photo134 from './images/photo134.jpg'
import photo135 from './images/photo135.jpg'
import photo136 from './images/photo136.jpg'
import photo137 from './images/photo137.jpg'
import photo138 from './images/photo138.jpg'
import photo139 from './images/photo139.jpg'
import photo140 from './images/photo140.jpg'
import photo141 from './images/photo141.jpg'
import photo142 from './images/photo142.jpg'
import photo143 from './images/photo143.jpg'
import photo144 from './images/photo144.jpg'
import photo145 from './images/photo145.jpg'
import photo149 from './images/photo149.jpg'
import photo150 from './images/photo150.jpg'
import photo151 from './images/photo151.jpg'
import photo152 from './images/photo152.jpg'
import photo153 from './images/photo153.jpg'
import photo154 from './images/photo154.jpg'
import photo156 from './images/photo156.jpg'
import photo157 from './images/photo157.jpg'
import photo158 from './images/photo158.jpg'
import photo159 from './images/photo159.jpg'
import photo160 from './images/photo160.jpg'
import googleStars from './images/googleStars.png'
import photo196 from './images/photo196.jpg'
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



import video1 from './videos/video1.mov'
import Contact from './Contact';
import BookingWidget from './BookingWidget';
import BookingComponent from './BookingComponent';
import Reviews from './Reviews';



export default function Home(props) {






    const nev = useNavigate()

    const carusel = useRef()

    useEffect(() => {
        props.setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
    }, []);

    const scrollToTop = () => {

        window.scrollTo(0, 0);
        nev('/company')

    }


    const photos = [, photo119,
        photo3, photo4, photo5, photo6, photo7, photo8, photo11, photo13,
        photo15, photo16, photo17, photo18, photo19, photo20, photo21,
        photo23, photo24, photo25, photo26, photo27,
        photo28, photo29, photo30, photo31, photo32, photo33, photo36,
        photo121, photo64, , photo124, photo146,
        photo105, photo110, photo111, photo113,
        photo114, photo115, photo116, photo117,
        photo120, photo132, photo133, photo138,
        photo139, photo140, photo162, photo189,
        photo190, photo180, photo181, photo182, photo183, photo194,
        photo164, photo165, photo186, photo187, photo191,
        photo198, photo199, photo200, photo201, photo117]




    const lepirteiScroll = () => {
        if (window.innerWidth <= 768) {
            return (770)
        }
        else {
            return (650)
        }
    }


const goToTours = () => {
    window.scrollTo(0, 0);
    nev('/tours')
}


    return (



        <div id='main'>



            <div className='container'>




                <video src={video1} autoPlay loop muted id='video1' />


                <div id='overlay'>  </div>







                <div className='frontTitleDiv' >


                    <FadeIn>

                        <h1 id='title'
                        >Genach Workshops</h1>
                        <h1 id='title2'>סדנאות פסיפסים, קדרות, סיורים והפקות אירועי גיבוש בנמל קיסריה</h1>
                        <p id='titleh2'>
                            סדנאות מקצועיות להכנת פסיפסים וכלי קרמיקה מול הים עבור חברות, קבוצות ולקוחות פרטיים
                            <br />
                            קחו את היצירה שלכם הביתה

                        </p>



                        <div id='lepirteiVeLasadnaDiv'>
                            <Link onClick={() => console.log('Clicked!')}><button onClick={() => {
                                window.scrollTo({
                                    top: lepirteiScroll(),
                                    behavior: 'smooth'
                                })
                            }} id='lepirtei'> לפרטי הסדנאות </button></Link>



                            <a href="https://wa.me/9720523948920" target="_blank" rel="noopener noreferrer">
                                <button id='lehazmana'>
                                    <i className="bi bi-whatsapp" id='W'></i> להזמנה מיידית
                                </button>
                            </a>


                         <button onClick={goToTours} id='lepirteiHasiurim'> לפרטי הסיורים </button>



                        </div>

                        {/* <h4><span id='googleReviews'> Google Reviews</span></h4>
                        <img id='googleStars' src={googleStars} /> */}




                        <Reviews />

                    </FadeIn>
                </div>

            </div>







            <div id='sss' className='s'>
                <img id='img1' src={photo74} />
                <img id='img2' src={photo37} />
                <img id='img3' src={photo196} />
            </div>




            <div className='s'>

                <h5 className='h5'>  <Link to={'/company'} className={'buttons2'} onClick={scrollToTop}><u>סדנאות פסיפסים לחברות</u></Link></h5>
                <h5 className='h5'>  <Link to={'/private'} className={'buttons2'} onClick={scrollToTop}><u>סדנאות פסיפסים בוטיק </u></Link></h5>
                <h5 className='h5'>  <Link to={'/pottery'} className={'buttons2'} onClick={scrollToTop}><u>סדנאות קדרות  </u></Link></h5>


            </div>



            <div className='s'>

                <h5 className='h5'>   יוצרים פסיפס בשיטה עתיקה של לוגו החברה שלכם  </h5>
                <h5 className='h5' >  יוצרים פסיפס אישי בשיטה עתיקה יחד עם אמני פסיפסים </h5>
                <h5 className='h5' >יוצרים וצובעים כלי חימר יחד עם אמני קדרות </h5>
            </div>

            <div className='center'>
                <h4 className='h4'>?כמה עושים</h4>
            </div>
            <div className='s'>

                <h5 className='h5'>פסיפס אחד גדול עבור משרדי החברה</h5>
                <h5 className='h5' id='h22'>כל משתתף יוצר פסיפס</h5>
                <h5 className='h5'>כל משתתף יוצר כלי</h5>


            </div>

            <div className='line' id='line2'></div>




            <div className='center'>
                <h4 className='h4'>?כמה משתתפים</h4>
            </div>

            <div className='s'>

                <h5 className='h5'  >ללא הגבלת משתתפים</h5>
                <h5 className='h5' > משתתף יחיד עד 10 משתתפים </h5>
                <h5 className='h5' > ללא הגבלת משתתפים</h5>
            </div>


            <div className='line' id='line4'></div>

            <div className='center'>
                <h4 className='h4'>?לאילו גילאים זה מתאים</h4>
            </div>
            <div className='s'>
                <h5 className='h5' >מתאים לכלל עובדי החברה</h5>
                <h5 className='h5' id='s52'>מתאים לילדים מגיל 7 ומעלה</h5>
                <h5 className='h5' id='s52'>מתאים לילדים מגיל 7 ומעלה</h5>
            </div>


            <div className='line' id='line5'></div>


            <div className='center'>
                <h4 className='h4'>?מתי נקבל את היצירה</h4>
            </div>
            <div className='s'>
                <div >
                    <h5 className='h5' id='s61'>זמן קצר לאחר הסדנא </h5>
                </div>
                <h5 className='h5' id='s62'>מיד בתום הסדנא</h5>
                <h5 className='h5' id='s62'>מיד בתום הסדנא</h5>

            </div>




            <div className='line' id='line6'></div>





            <div id='caruselDiv'>
                <motion.div ref={carusel} id='carusel' whileTap={{ cursor: "grabbing" }}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -props.width }} id='innerCarusel'>
                        {photos.map(image => {
                            return (
                                <motion.div id='item' key={image}>
                                    <img src={image} alt='' />
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>

            {/* <BookingWidget /> */}
            {/* <BookingComponent /> */}

            <Contact />








        </div>


    )
}