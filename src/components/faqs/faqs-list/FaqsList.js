import React from "react";

const FaqsList = ({ id, qus, ans }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${id === "One" ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={id === "One" ? "true" : "false"}
          aria-controls={`collapse${id}`}
        >
          {qus}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${id === "One" ? "show" : ""}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{ans}</div>
      </div>
    </div>
  );
};

export default FaqsList;
