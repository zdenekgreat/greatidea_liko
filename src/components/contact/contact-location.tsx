import React from "react";
import Image from "next/image";
// images
import location_1 from "@/assets/img/inner-contact/contact/info-1.jpg";
import location_2 from "@/assets/img/inner-contact/contact/info-2.jpg";
import location_3 from "@/assets/img/inner-contact/contact/info-3.jpg";
import Link from "next/link";

// data
const location_data = [
  {
    id: 1,
    img: location_1,
    country: "Francie",
    time: "12:00 hodin GMT+2",
    location_title: "Hlavní pobočka",
    address: "Base Creative, 43 Appleton <br /> Lane, 3287 Hamilton",
    phone: "+420 123 456 789",
    email: "info@liko.cz",
  },
  {
    id: 2,
    img: location_2,
    country: "Německo",
    time: "11:00 hodin GMT+2",
    location_title: "Pobočka Berlín",
    address: "Base Creative, 43 Appleton <br /> Lane, 3287 Hamilton",
    phone: "+49 987 654 321",
    email: "berlin@liko.cz",
  },
  {
    id: 3,
    img: location_3,
    country: "Nový Zéland",
    time: "10:00 hodin GMT+2",
    location_title: "Pobočka Auckland",
    address: "Base Creative, 43 Appleton <br /> Lane, 3287 Hamilton",
    phone: "+64 555 666 777",
    email: "auckland@liko.cz",
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-info-thumb">
                      <Image src={item.img} alt="image" style={{ height: "auto" }} />
                    </div>
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <Link
                          href="https://www.google.com/maps"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></Link>
                      </div>
                      <div className="cn-contact-map">
                        <Link href="#">Zobrazit na mapě</Link>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <Link href="tel:(+91)76001726">{item.phone}</Link> <br />
                      <Link href="mailto:Hello@contact.com">{item.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
