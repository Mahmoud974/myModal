import React, { useState } from "react";

const App = () => {
  const [activeModal, setActiveModale] = useState(true);

  return (
    <main className="container">
      <button
        id="btnActiveModal"
        className={
          activeModal ? "btnActiveModal btn btn-secondary px-2 " : "d-none"
        }
        onClick={() => setActiveModale(false)}
      >
        Click here
      </button>

      {/* display block */}
      <div
        className={activeModal ? "d-none" : "modalCenter shadow  mb-5 d-block"}
      >
        <div className="information bg bg-primary-subtle">
          <h2 className="text-uppercase fw-bolder px-5 pt-2 text-light">
            Information
          </h2>
        </div>

        <div className="bloc px-5 pt-4">
          <p className="text-muted">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            dignissimos cumque libero voluptatem voluptates nihil maiores, dolor
            dolores repudiandae! Debitis animi est hic, voluptatum incidunt
            inventore ab qui. Distinctio, sed?
          </p>
          <div className="d-flex justify-content-end ">
            <button
              className="btnOut btn btn-secondary my-3 "
              onClick={() => setActiveModale(true)}
            >
              Closed
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
