import CTA from '@/components/CTA/CTA';
import Tools from '@/components/tools/Tools';
import ImageCard from '@/components/imageCard/ImageCard';
import { STATS } from '@/lib/Constants';
import { HiOutlineSquare3Stack3D, HiOutlineEnvelope } from 'react-icons/hi2';

const AboutCard = () => {
  return (
    <section className='flex flex-col gap-8 items-center'>
      <div className='flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4'>
        <div className='flex justify-center items-center gap-4'>
          <div className='size-32 lg:size-60 xl:size-72 2xl:size-80 overflow-hidden rounded-lg'>
            <ImageCard src='/imgs/avatar.webp' />
          </div>
          <div className='lg:hidden'>
            <span className='opacity-100 font-semibold text-primary'>
              Hello I Am
            </span>
            <h1 className='font-bold text-3xl'>Maged Faiz</h1>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='hidden lg:block'>
            <span className='opacity-100 font-semibold text-primary'>
              Hello I Am
            </span>
            <h1 className='font-bold text-4xl'>Maged Faiz</h1>
          </div>
          <p className='lg:text-balance'>
            Experienced web developer based in Juba, South Sudan, with a passion
            for crafting seamless digital experiences and a proven track record.
          </p>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4'>
            <CTA
              text='Email Me'
              href='mailto:email@me.com'
              external={true}
              icon={<HiOutlineEnvelope />}
            />
            <CTA
              text='My Projects'
              href='/projects'
              icon={<HiOutlineSquare3Stack3D />}
            />
          </div>
        </div>
      </div>
      <div className='w-full space-y-8'>
        <Tools />
        <Stats stats={STATS} />
      </div>
    </section>
  );
};

export default AboutCard;

const Stats = ({ stats }: { stats: typeof STATS }) => (
  <div className='grid place-items-center grid-cols-2 lg:grid-cols-4 gap-5 py-5 border-b border-copy/10'>
    {stats.map(({ count, label }) => (
      <div
        key={label}
        className='w-full flex flex-col gap-2 justify-center items-center'
      >
        <span className='text-4xl font-bold opacity-100 text-primary'>
          {count}+
        </span>
        <span className='font-bold'>{label}</span>
      </div>
    ))}
  </div>
);
