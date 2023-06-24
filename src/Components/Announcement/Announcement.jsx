import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Announcement.module.css";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneOutbound } from "react-icons/bs";

import { Link } from "react-router-dom";
const Announcement = () => {
  const { t } = useTranslation();
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  // const [isInput, setIsInput] = useState("");
  // const [bloodType, setBloodType] = useState("");
  // const [quantity, setQuantity] = useState(0);
  // const handleChangeMsg = (e) => {
  //   setIsInput(e.target.value);
  // };
  // const handleChangeBloodType = (e) => {
  //   setBloodType(e.target.value);
  // };
  // const handleChangeQuantity = (e) => {
  //   setQuantity(parseInt(e.target.value));
  // };
  // const handleDisplay = () => {
  //   const newAnn = {
  //     id: uuid,
  //     bloodType: bloodType,
  //     quantity: quantity,
  //     msg: isInput,
  //   };
  //   axios.post("http://localhost:3005/announcements", newAnn);
  //   console.log("done");
  //   setAnn([...ann, newAnn]);
  //   setBloodType("");
  //   setQuantity(0);
  //   setIsInput("");
  // };
  useEffect(() => {
    setisLoading(true);
    axios
      .get("http://localhost:3005/announcements")
      .then((response) => {
        setAnnouncements(response.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return <>
    <div className="container py-5">
      <div className="text-center mt-5 mb-5">
        <h2 className="text-muted fw-bold">Announcements</h2>
      </div>
      <div className="row gy-3">
        {isLoading ? <div>Loading.....</div> :

          announcements.map((a) => <div className={`${styles.annoCard} col-lg-12 py-4 px-3 text-center`}>
            <h4 className="text-muted">Hospital Name : <span className="h4 text-danger">{a.orgData.orgName}</span></h4>
            <h4 className="text-muted">Blood Type : <span className="h4 text-danger">{a.bloodType}</span></h4>
            <h4 className="text-muted">Quantity : <span className="h4 text-danger">{a.quantity}</span></h4>
            <p className="fs-5">{a.message}</p>
            <div className="icons mt-4 mb-3">
              <p className="fs-5">Contact With {a.orgData.orgName} Hospital :</p>
              <Link className="me-3" to={`tel:+${a.orgData.pNumber}`}><BsTelephoneOutbound size={20} className="text-danger"></BsTelephoneOutbound></Link>
              <Link className="me-2" target="_blank" to={`https://wa.me/+${a.orgData.pNumber}`}><AiOutlineWhatsApp size={25} className="text-danger"></AiOutlineWhatsApp></Link>
              <Link to={""}><CiLocationOn size={25} className="text-danger"></CiLocationOn></Link>
            </div>
          </div>
          )
        }



      </div>
    </div>

  </>
};

export default Announcement;
