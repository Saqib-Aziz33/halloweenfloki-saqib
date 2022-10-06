import Bar from "../utils/Bar"
import FaqSection from "../utils/FaqSection"

function FAQ() {
  return (
    <div className="faqs-section container my-5 py-4 px-2" id="faq">
      <div className="row">
        <div className="col-md-7 mb-4">
          <h6><Bar />FAQS</h6>
          <h1 className="mt-4 mb-5 pb-5">Frequently Asked Questions</h1>
          <FaqSection />
        </div>
        <div className="col-md-5 mb-4">
          <img src="assets/question.png" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}
export default FAQ