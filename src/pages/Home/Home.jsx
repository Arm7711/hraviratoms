import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import Section from '../../components/Section/Section';
import ArrowSvg from '../../components/svg/ArrowSvg';
import lastBels from '../../assets/images/site-images/verjin-zang-1.png'
import ScratchCard from '../../components/ScratchCard/ScratchCard';

import discImg from '../../assets/images/site-images/disk.png'
import diskLine from '../../assets/images/site-images/disk-line.png'
import LinesSvg from '../../components/svg/LinesSvg';
import PlayButton from '../../components/PlayButton/PlayButton';
import bell from '../../assets/images/site-images/bell.png'
import TextAnimator from '../../components/TextAnimatior/TextAnimatior';
import skrep from '../../assets/images/site-images/skrep.png'
import headTeacher from '../../assets/images/site-images/head-teacher.png';
import teacher from '../../assets/images/site-images/teacher.png';
import teacherLast from '../../assets/images/site-images/teacher-2.png';
import borderImage from '../../assets/images/site-images/border-image.png';
import teacherFullName from '../../assets/images/site-images/teacher-fullname.png';
import headeTeacherSms from '../../assets/images/site-images/head-teachers-2.png';
import sms from '../../assets/images/site-images/sms.png'
import wrapperImage from '../../assets/images/site-images/wrapper.png'
import LentSvg from '../../components/svg/LentSvg';
import studentsTitle from '../../assets/images/site-images/students.png'

import BlurImage from '../../components/BlureImage/BlureImage';
import CurveSvg from '../../components/svg/CurveSvg';

const textData = [
  'Մեր հուշերի մեղեդին',
  'Բարի գալուստ մեր թվային օրագիր՝ մեր վերջին զանգի պատմություն»',
  ` 12 տարի միասին անցած
    ճանապարհ, լի հիշողություններով,
    ծիծաղով և երբեմն՝
    դժվարություններով:
`,
  `
    Մենք պարզապես դասարան չէինք,
    Մենք ընտանիք էինք...`
  ,
  'մաթեմատիկայի ուսուցչուհի',
  `Ձեր ոսկեծամ խոպոպների մեջ թելերն արծաթե,

որ երևում են \`

  \n- Մենք բաժին ունենք:

  Ձեր բարի դեմքի կնճիռների մեջ\`

\n-Մենք բաժին ունենք,`,

  `Իսկ Դու′ք, մեր բարի, մեր լավ ուսուցիչ.

Դուք բաժին ունեք մեր կյանքի գարնան
ծաղիկների մեջ,

Դուք բաժին ունեք մեր մանուկ սրտի վաղ
լուսաբացի ծաղիկների մեջ,

Մեր. գիտցածի մեջ, ունեցածի մեջ:`,

  `Մեր ճանապարհի ամենակարևոր ուղեկիցներից
մեկը մեր դասղեկն էր։

Տասներկու տարվա ընթացքում նա դարձավ մեր
վստահելի ուղեցույցը և մեր պատմության
անբաժանելի մասն ու մեր ընկերը...`,

  `Մեր ուսուցիչները եղել են այն մարդիկ, ովքեր մեզ
տվել են ոչ միայն գիտելիքներ, այլ նաև
մարդկային կարևոր արժեքներ։`,

  `Յուրաքանչյուր դաս դարձավ մի փոքրիկ կյանքի
դաս, որը մեզ պատրաստեց դեպի ապագա՝
դեպի հասուն կյանք։`,

  ` Մենք շնորհակալ ենք յուրաքանչյուր ուսուցչի՝
իրենց համբերության, անսահման նվիրման և
ոգեշնչման համար։`

];

const studentsImage = [
  '/images/1L2A1501.webp',
  '/images/1L2A1509.webp',
  '/images/1L2A1545.webp',
  '/images/1L2A1583.webp',
  '/images/1L2A1635.webp',
  '/images/1L2A1640.webp',
  '/images/1L2A1662.webp',
]

export default function Home() {
  return (
    <div className='site__home__page'>
      <Section title={lastBels} titleIs={true}>
        <div className='inner__scratch'>
          <ScratchCard />
        </div>
      </Section>

      <Section className={'inner__arrow__section'} classNameSection={'arrow'}>
        <button className='arrow__slider'>
          <ArrowSvg />
        </button>
      </Section>

      <Section className={'disc__section'}>
        <div className='disc__container'>
          <div className='tape__container'>
            <LinesSvg />
          </div>

          <figure className='disc__figure'>
            <BlurImage src={discImg} className={'disc__image'} />

            <img className='disc__line__image' src={diskLine} alt="disk line" />
          </figure>

          <div className='tape__container tape__container__last'>
            <LinesSvg />
          </div>
        </div>

        <div className='audio__container'>
          <PlayButton src={'/verjin-zang.mp3'} />

          <svg viewBox="0 0 500 120" width="100%">
            <path id="curve" d="M20,20 Q250,100 480,20" fill="none" />
            <text fontSize="36" fontFamily="inherit">
              <textPath href="#curve" startOffset="50%" className='text' textAnchor="middle">
                {textData[0]}
              </textPath>
            </text>
          </svg>
        </div>
      </Section>

      <Section className={'diary__section'} classNameSection='diary__section__big'>
        <div className='header__image'>
          <figure className='header__image__figure'>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img className='image' src={bell} alt="bell image" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <img className='image image__last' src={bell} alt="bell image" />
            </motion.div>
          </figure>
        </div>

        <h1 className='title'><p className='cl'>12Ա</p> <span className='class'>դասարան</span></h1>

        <TextAnimator className='desc' text={textData[1]} />

        <div className='images__slide'>
          <figure className='class__image__figure'>
            <img src={skrep} alt="image" className='skrep' />
            <BlurImage src={'/images/1L2A1501.webp'} className={'class__image'} />
          </figure>

          <figure className='class__image__figure  class__image__figure__last'>
            <BlurImage src={'/images/1L2A1635.webp'} className={'class__image'} />
          </figure>
        </div>

        <div className='text__block'>
          <TextAnimator className='text__anim' text={textData[2]} />
          <TextAnimator className='text__anim text__anim__last' text={textData[3]} />
        </div>
      </Section>

      <Section
        className={'head__teacher__section'}
        titleIs={true}
        title={headTeacher}
        titleFigureClassName={'teacher__section__figure'}
        titleImageClassName={'teacher__section__image'}
        titleContainerClassName={'teacher__section__container'}
      >
        <figure
          className='border__image__figure'
          style={{
            backgroundImage: `url(${borderImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain'
          }}
        >

        </figure>

        <div className='teacher__info'>
          <figure className='teacher__fullname__figure'>
            <img src={teacherFullName} className='teacher__fullname__image' alt="image" />
          </figure>

          <TextAnimator className='text__teacher' text={textData[4]} />

          <div className='teacher__wrapper'>
            <figure className='wrapper__figure__first'>
              <img className='wrapper__image__first' src={sms} alt="image" />

              <LentSvg />
            </figure>

            <div
              className='wrapper__content'
              style={{
                backgroundImage: `url(${wrapperImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}
            >
              <div className={`title title__wrapper`}>
                <figure className={`titleFigureClassName`}>
                  <BlurImage src={headeTeacherSms} className={`image`} />
                </figure>
              </div>

              <div className='wrapper__container'>
                <TextAnimator className='text__teacher' text={textData[5]} mode='pop' />
                <TextAnimator className='text__teacher' text={textData[6]} mode='pop' />
              </div>
            </div>

            <div className='text__desc'>
              <TextAnimator className='desc' text={textData[7]} />
            </div>
          </div>
        </div>
      </Section>

      <Section className={'students__section'} titleIs={true} title={studentsTitle}>
        <div className='students__container'>
          {studentsImage.map((item, index) => (
            <figure className={classNames('students__figure', { even: index % 2 === 0 })}>
              <div className='image__block'>
                <BlurImage src={item} className={`image`} duration={1.2} />
              </div>

              {studentsImage?.length - 1 !== index && <CurveSvg />}
            </figure>
          ))}
        </div>
      </Section>


      <Section
        className={'head__teacher__section'}
        titleIs={true}
        title={teacher}
        titleFigureClassName={'teacher__section__figure'}
        titleImageClassName={'teacher__section__image'}
        titleContainerClassName={'teacher__section__container teacher__section__container__last'}
      >

        <div className='teacher__info'>

          <div className='teacher__wrapper teacher__wrapper__last'>
            <figure className='wrapper__figure__first'>
              <img className='wrapper__image__first' src={sms} alt="image" />

              <LentSvg />
            </figure>

            <div
              className='wrapper__content'
              style={{
                backgroundImage: `url(${wrapperImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}
            >
              <div className={`title title__wrapper`}>
                <figure className={`titleFigureClassName`}>
                  <BlurImage src={teacherLast} className={`image`} />
                </figure>
              </div>

              <div className='wrapper__container'>
                <TextAnimator className='text__teacher' text={textData[8]} mode='pop' />
                <TextAnimator className='text__teacher' text={textData[9]} mode='pop' />
                <TextAnimator className='text__teacher' text={textData[10]} mode='pop' />
              </div>
            </div>

          </div>
        </div>
      </Section>
    </div>
  )
}
