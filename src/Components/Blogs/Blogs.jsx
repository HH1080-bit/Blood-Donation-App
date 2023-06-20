import React from "react";
import styles from "./Blogs.module.css";
import { useTranslation } from 'react-i18next';

const Blogs = () => {
  const {t} = useTranslation();
  const imgsPrag = [
    {
      id: 1,
      src: "/assets/blogs/11-1.png",
      description:
        `${t("Blood donation is a regulated and safe process with thorough screening to assess donor eligibility and testing to prevent risks to recipients.")}`,
    },
    {
      id: 2,
      src: "/assets/blogs/222.png",
      description:
        `${t("A single blood donation can save up to three lives by providing essential components like red blood cells, platelets, and plasma for various medical treatments, such as surgery or blood loss replacement.")}`,
    },
    {
      id: 3,
      src: "/assets/blogs/3-3.png",
      description:
        `${t("Blood donation relies on volunteers' generosity, and regular donors are crucial to meet the constant need for blood. Your donation can bring hope to those in need, contributing to a compassionate community dedicated to saving lives and improving well-being.")}`,
    },
    {
      id: 4,
      src: "/assets/blogs/4-4-4.png",
      description:
        `${t("Blood types are categorized into four main groups: A, B, AB, and O. Type O negative is a universal donor, compatible with all blood types, while individuals with AB positive are universal recipients, able to receive blood from any type. Ensuring the compatibility of blood types is vital during transfusions to minimize risks and optimize effectiveness.")}`,
    },
    {
      id: 5,
      src: "/assets/blogs/5-5-55.png",
      description:
        `${t("Individuals typically need to be at least 17 or 18 years old, in good health, meet weight requirements, and have an adequate hemoglobin level. Certain factors like recent travel or medical treatments may result in temporary deferral. It's important to consult the local blood donation center or blood bank for specific eligibility criteria as guidelines can vary by region.")}`,
    },
  ];
  return (
    <div className="container-fluid">
      <h1 className={`text-danger mt-3  text-center ${styles.h1}`}>
        {t("Saving Lives Through Donation")}
      </h1>
      {imgsPrag.map((img, index) => (
        <div
          className="row d-flex align-items-center justify-content-end mb-5 mx-5 "
          key={img.id}
        >
          <div className="col-md-4">
            <img
              src={img.src}
              alt={`Image ${index + 1}`}
              className="img-fluid rounded "
            />
          </div>
          <div className="col-md-8 ">
            <p className={`${styles.p} text-justify justify-content-center `}>
              {img.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
