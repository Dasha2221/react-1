import "./index.css";

import host from "./host.svg";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <h1 className="contact__name">Господар - {name}</h1>
      <div className="contact__sub-block">
        <img src={image} className="contact__image"></img>

        <span className="contact__sub-value">{phone}</span>

        <span className="contact__sub-value">{response_time}</span>

        <span className="contact__sub-value">
          {response_rate}% відсотків швидкості відгуку
        </span>
      </div>

      <span className="contact__sub-value">{info}</span>
    </div>
  );
}
