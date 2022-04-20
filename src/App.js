import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const btnActiveModal = document.querySelector(".btnActiveModal");
    const btnOut = document.querySelector(".btnOut");
    const modalCenter = document.querySelector(".modalCenter");

    btnActiveModal.onclick = () => {
      modalCenter.style.display = "initial";
      btnActiveModal.style.display = "none";
    };
    btnOut.onclick = () => {
      btnActiveModal.style.display = "initial";
      modalCenter.style.display = "none";
    };
  });

  return (
    <div className="container">
      {/* Active your modal with button */}
      <button className="btnActiveModal btn btn-success px-2">My modal</button>

      {/* display block */}
      <div className="modalCenter shadow  mb-5  ">
        <div className="information bg bg-primary ">
          <h2 className="text-uppercase fw-bolder px-5 pt-2 text-light">
            Information
          </h2>
        </div>
        <div className="divider my-3 "></div>
        <div className="bloc px-5">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            dignissimos cumque libero voluptatem voluptates nihil maiores, dolor
            dolores repudiandae! Debitis animi est hic, voluptatum incidunt
            inventore ab qui. Distinctio, sed?
          </p>
          <div className="d-flex justify-content-end ">
            <button className="btnOut btn btn-primary my-3 ">Closed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
