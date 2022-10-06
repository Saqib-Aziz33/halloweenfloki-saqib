import Bar from '../utils/Bar'
import {BsTwitter, BsTelegram} from 'react-icons/bs'

function About() {
  return (
    <div className="container about py-5 my-4" id="about">
        <div className="row">
            <div className="col-md-6 mb-4">
                <h6><Bar /> WHAT IS HALLOWEEN FLOKI</h6>
                <h2 className='display-5 fw-bold my-5'>From the Team That Brought You Valentine Floki</h2>
                <p>Halloween Floki (FLOH) is a meme cryptocurrency token operating on the BEP-20 Blockchain technology (Binance Smart Chain). With the great experience, knowledge and wisdom of the core team, FLOH will attempt to peak at the highest market cap a Floki sub-project has ever reached, all while distributing BUSD rewards every day to its holders.</p>
                <p>We are taking advantage of the upcoming Holiday to gain the crypto community’s attention but as the weeks go by, this project will gain its reputation through continuous communication with its investors, aggressive marketing campaigns, listings and constant deliveries from the leadership team. Backed by cryptocurrency and stock market whales, we invite you on this journey to the double-digits millions market cap!</p>
                <div className="social-icons">
                        <button style={{backgroundColor: '#1da1f2FF'}} className='btn'>
                            <BsTwitter size={30} />
                        </button>
                        <button style={{backgroundColor: '#f27022FF'}} className='btn'>
                            <BsTelegram size={30} />
                        </button>
                    </div>
            </div>
            <div className="col-md-6 mb-4">
                <img className="img-fluid" src="assets/logo-bg.png" alt="" />
            </div>
        </div>
    </div>
  )
}
export default About