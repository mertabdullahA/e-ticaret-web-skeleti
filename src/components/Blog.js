import './css/blog.css'

import { BsCalendarDate } from "react-icons/bs";


function Blog() {


    return (


        <>
            <div className='ilkmetin'>


                <h1 className='blog-ana-baslık'>Look</h1>
                <p className='blog-ana-baslık'>Dolores voluptatum rerum architecto perferendis praesentium doloremque</p>
                <div className='blog'>


                    <div class="polaroid">

                        <img src="https://s3-alpha-sig.figma.com/img/bb1b/2353/9392fa15e47c59c4296c182ffc6bdfc0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmPlycG8WVppsPb4O8uXJwmxyBEange2cRMSaLkHS8af4jpV2N6EfpIymTBMw8dzl4mXevRpz~1RobFPYOI9PhXsu9a-fyWevF~AF8YQIOqorKH8~WIh8hNG5KwKYQhkuaC8KX8~Nh~undDYhP5bjCsPF5lrYpq8LDTbWockAOw38tLea9rM1y1GY~uSWphuzojog7EbrJgvSnZ9xxzRToXWYhJiNQPKaJk~MCh2vOB3-ehAaWkLRMGaXbm1JOV03EqvWVQKfEj8-5eh6a31s8Ih76mtPlZWJ3VG7BjmxOtwjSWOMdoURcfzbrhacrYN281GnrUDekUN3wPguN9Srw__" alt="Norther Lights"></img>
                        <div class="container">
                            <h1 className='blog-baslık'>Hangi Tasarımcının Hayatı<br></br>
                                Sana Daha Yakın?</h1>
                            <a href='#' className='blog-link'>Markalar</a>
                            <p className='blog-acıklama'><BsCalendarDate />
                                04 Kasım 2021</p>
                        </div>
                    </div>
                    <div class="polaroid">
                        <img src="https://s3-alpha-sig.figma.com/img/be8f/18ae/fd754b7713a430e6fb0453bf4d53033c?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AAnmMI-hUgqfIdvzPRx6FasNnJm-y263DXqm1zVUlQU-Bi5sN6V2QK60bkkmyGlKmmHJwNI-msRg8Ax3A4b3XNreK4mqvuDPWlLCjj1KJU99Qn9ScyUMHibNcGM5J1ywzMfksP--JsQQ3QTpaWSIBnI~pbjtXOFF3b8S-gfKifDi8BMp-y7QJGaLveE9vLh7ZHnHSHtSJiBAS0FVaF0ji1yCds~UvGmU-3ZSZW3vFoiv~bCPLUkjy5ExvjPQna49AWMSPQGEuICyCcTtvcGIgqJaswsVEEMUnA9xIm4xPWXqBA5-HmBXh5rKLT0Sh9L3zqY92nfBMeHtL5CN-kQRMg__" alt="Norther Lights"></img>
                        <div class="container">
                            <h1 className='blog-baslık'>Doğru okul çantası seçimi için <br></br> ipuçları</h1>
                            <a href='#' className='blog-link'>Markalar</a>
                            <p className='blog-acıklama'><BsCalendarDate />
                                04 Kasım 2021</p>
                        </div>
                    </div>
                    <div class="polaroid">
                        <img src="https://s3-alpha-sig.figma.com/img/bb1b/2353/9392fa15e47c59c4296c182ffc6bdfc0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmPlycG8WVppsPb4O8uXJwmxyBEange2cRMSaLkHS8af4jpV2N6EfpIymTBMw8dzl4mXevRpz~1RobFPYOI9PhXsu9a-fyWevF~AF8YQIOqorKH8~WIh8hNG5KwKYQhkuaC8KX8~Nh~undDYhP5bjCsPF5lrYpq8LDTbWockAOw38tLea9rM1y1GY~uSWphuzojog7EbrJgvSnZ9xxzRToXWYhJiNQPKaJk~MCh2vOB3-ehAaWkLRMGaXbm1JOV03EqvWVQKfEj8-5eh6a31s8Ih76mtPlZWJ3VG7BjmxOtwjSWOMdoURcfzbrhacrYN281GnrUDekUN3wPguN9Srw__" alt="Norther Lights"></img>
                        <div class="container">
                            <h1 className='blog-baslık'>Hangi Tasarımcının Hayatı<br></br>
                                Sana Daha Yakın?</h1>
                            <a href='#' className='blog-link'>Markalar</a>
                            <p className='blog-acıklama'><BsCalendarDate />
                                04 Kasım 2021</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}


export default Blog