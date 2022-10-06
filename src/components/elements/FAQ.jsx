import Bar from "../utils/Bar"
import FaqSection from "../utils/FaqSection"
import {BsTwitter, BsTelegram} from 'react-icons/bs'

function FAQ() {
  return (
    <div className="faqs container my-5 py-4 px-2" id="faqs">
      <div className="row">
        <div className="col-md-7 mb-4">
          <h6><Bar />FAQS</h6>
          <h1 className="mt-4 mb-5 pb-5">Frequently Asked Questions</h1>
          <FaqSection />
          <div className="social-icons mt-5">
                        <button style={{backgroundColor: '#1da1f2FF'}} className='btn'>
                            <BsTwitter size={30} />
                        </button>
                        <button style={{backgroundColor: '#f27022FF'}} className='btn'>
                            <BsTelegram size={30} />
                        </button>
                    </div>
        </div>
        <div className="col-md-5 mb-4">
          <img src="assets/question.png" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}
export default FAQ