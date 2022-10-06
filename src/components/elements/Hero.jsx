import {BsTwitter, BsTelegram} from 'react-icons/bs'

function Hero() {
  return (
    <section className="hero pt-5">
        <div className="container pt-5">
            <div className="row pt-5">
                <div className="col-lg-6">
                    <h1 className="display-3 fw-bold text-center my-5">Halloween Floki</h1>
                </div>
                <div className="col-lg-6 hero-content text-center px-2 py-5">
                    <h2>$FLOH Live Now!</h2>
                    <button className="btn btn-primary-btn my-4">Buy</button>
                    <div className="social-icons">
                        <button style={{backgroundColor: '#1da1f2FF'}} className='btn'>
                            <BsTwitter size={30} />
                        </button>
                        <button style={{backgroundColor: '#745f98FF'}} className='btn'>
                            <BsTelegram size={30} />
                        </button>
                    </div>
                        <h6 className='mt-5'>Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326</h6>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Hero