import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/frontend_assets/assets';


const About = () => {
  return (
    <div>
      <div className='text-xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Velora was born out of a passion for innovation and a desir to revolution the clothing brands acroos the county and ultimatlet ove rthe world.</p>
          <p>Since our inception, weve worked tirelessly to curate a diverse selection to our clothes, carefully handpicked and detailed eccentric designs gives all our clother quality product 100% cotton. From fashion to comfortable home clothing.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Velora is to empower customers with choice, convenience and seemless fashion.</p>
        </div>
      </div>

      <div className='text'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20' >
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Contrary to popular belief, Lorem Ipsum is not simply random text.  </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Contrary to popular belief, Lorem Ipsum is not simply random text.  </p>
        </div>
      </div>
      <NewsletterBox/>

    </div>
  )
}

export default About