import reactsvg from './assets/reactsvg.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>ContenfulCMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nesciunt eligendi distinctio, fuga minima, deserunt
            nostrum corrupti dolor, voluptas nobis perferendis delectus sequi!
            Consectetur minima velit temporibus deleniti veritatis modi?
          </p>
        </div>
        <div className='img-container'>
          <img src={reactsvg} alt='HEROIMG' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
