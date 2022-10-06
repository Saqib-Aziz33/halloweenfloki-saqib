import Bar from "../utils/Bar";

function Documents() {
  return (
    <div className="documents my-5 p-4" id="documents">
      <div className="container p-4">
        <div className="row">
          <section className="col-md-8 mb-3 px-4">
            <p>
              <Bar />
              Whitepaper
            </p>
            <h2 className="mt-3 mb-5 fs-1">Read Our Documents</h2>
            <div className="checks">
              <p className="check-container">
                <span className="check"> &#10003;</span>{" "}
                <span className="text">KYC</span>
              </p>
              <p className="check-container">
                <span className="check"> &#10003;</span>{" "}
                <span className="text">Audit</span>
              </p>
              <p className="check-container">
                <span className="check"> &#10003;</span>{" "}
                <span className="text">Whitepaper</span>
              </p>
            </div>
            <div className="dropdown-container mt-5">
              <p className="dropdown-text">Download</p>
              <div className="dropdowns">
                <p>KYC</p>
                <p>Audit</p>
                <p>Whitepaper</p>
              </div>
            </div>
          </section>
          <div className="col-md-4 mb-3">
            <img src="assets/logo.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Documents;
