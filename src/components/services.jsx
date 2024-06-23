import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            At RegTech Solutions, we specialize in delivering state-of-the-art
            regulatory technology solutions. Our mission is to empower
            businesses in the real estate, supply chain, and commerce sectors to
            manage compliance and risk management through blockchain
            efficiently. Our comprehensive platform ensures your business stays
            ahead of regulatory requirements while operating seamlessly and
            securely.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <div style={{display: "flex", flexDirection : "column", fontWeight : "0.5px"}} >
                      {d.elements.map((e, i) => (
                        <i key={i}>{e}</i>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
