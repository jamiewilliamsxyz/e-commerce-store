'use client';

const TrustCard = ({ icon,  title, text }) => {
  return(
    <div className='flex text-center flex-col gap-6 self-center text-neutral-800 max-w-80'>
      <div>{icon}</div>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='text-md'>{text}</p>
  </div>
  );
};

export default TrustCard;