import React, { useState } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useAuth } from "../../context/AuthContext";
import "./specialorder.css";
import { db } from "../firebase/firebase.Config";
import { addDoc, collection } from "firebase/firestore";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import axios from "axios";
/*
the special order  form using formik library for ordering meals that are not existed in the menu 
 name,quantity ,and describtion using regex to detect if theres
unrequired charachter inserted , it only support arabic and english languages
its only for customers not for every one so it doesnt contain email or phone numbers
(it will be edited in future)
*/
const errorStyling = {
  color: "rgb(255,255,255)",
};

const SpecialOrder = () => {
  const { currentUser, dataUser } = useAuth();
  const navigate = useNavigate();
  const [today, setToday] = useState();

  React.useEffect(() => {
    function getCurrentTime() {
      axios
        .get(`http://worldtimeapi.org/api/timezone/Asia/Jerusalem`)
        .then((res) => {
          setToday(JSON.stringify(res.data.datetime).slice(1, -1));
        });
    }
    getCurrentTime();
  }, []);

  function getTime() {
    var todays = String(today).slice(11, 19);
    console.log(todays);
    return todays;
  }
  function getDate() {
    var todays = String(today).slice(0, 10);
    return todays;
  }
  return (
    <div className="special-order-page">
      <Header />
      <Formik
        initialValues={{
          name: "",
          quantity: "",
          describtion: "",
        }}
        onSubmit={(values, actions) => {
          const orderResult = collection(db, "specialOrders");
          addDoc(orderResult, {
            specialOrder: {
              name: values.name,
              quantity: values.quantity,
              describtion: values.describtion,
            },
            dataUser: {
              firstName: dataUser.firstName,
              lastName: dataUser.lastName,
              firstAddress: dataUser.firstAddress,
              secondAddress: dataUser.secondAddress,
              phoneNumber: dataUser.phoneNumber,
              email: dataUser.email,
              uid: dataUser.uid,
            },
            status: "وضع الانتظار",
            orderTime: getTime(),
            orderDate: getDate(),
          })
            .then(function () {
              NotificationManager.success(" تم الطلب بنجاح ", "نجح");
            })
            .catch(function () {
              NotificationManager.warning("خطأ في الخدمة", "خطأ", 1000);
            });
        }}
        validate={(values) => {
          const errors = {};
          const nameArabicRegex = /^[\u0621-\u064A\u0660-\u0669 ]+$/i;
          if (!values.name) {
            errors.name = "الاسم مطلوب";
          } else if (!nameArabicRegex.test(values.name)) {
            errors.name = "الاسم غير صالح";
          } else if (values.name.length <= 0 || values.name.length > 20) {
            errors.name = "الاسم غير صالح";
          }
          if (!values.quantity) {
            errors.quantity = "الكمية مطلوبة";
          } else if (values.quantity < 0 || values.quantity > 1000) {
            errors.quantity = "ادخل كمية صالحة ";
          }
          if (!values.describtion) {
            errors.describtion = "الوصف مطلوب";
          } else if (
            !values.describtion ||
            !nameArabicRegex.test(values.describtion)
          ) {
            errors.describtion = "الوصف غير صالح";
          } else if (
            values.describtion.length <= 0 ||
            values.describtion.length > 100
          ) {
            errors.describtion = "الوصف غير صالح";
          }

          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <section
            className="contact-clean"
            style={{ background: "rgb(0,0,0)" }}
          >
            <Form style={{ background: "rgb(121,10,10)" }}>
              <h2 className="text-center" style={{ color: "rgb(255,255,255)" }}>
                طلبية خاصة
              </h2>

              <div className="mb-3">
                <Field
                  className="form-control"
                  type="text"
                  htmlFor="name"
                  name="name"
                  placeholder="اسم الوجبة"
                />
              </div>
              <ErrorMessage
                name="name"
                render={(msg) => (
                  <div type="invalid" style={errorStyling}>
                    {"! " + msg + " *"}
                  </div>
                )}
              />

              <div className="mb-3">
                <Field
                  className="form-control is-invalid"
                  type="number"
                  name="quantity"
                  placeholder="الكمية"
                  pattern="numbers"
                />
              </div>
              <ErrorMessage
                name="quantity"
                render={(msg) => (
                  <div type="invalid" style={errorStyling}>
                    {"! " + msg + " *"}
                  </div>
                )}
              />

              <div className="mb-3">
                <Field
                  className="form-control"
                  name="describtion"
                  component="textarea"
                  placeholder="اوصف طلبيتك هنا"
                  rows="14"
                />
              </div>
              <ErrorMessage
                name="describtion"
                render={(msg) => (
                  <div type="invalid" style={errorStyling}>
                    {"! " + msg + " *"}
                  </div>
                )}
              />
              {currentUser ? (
                <div className="mb-3">
                  <button
                    className="btn btn-primary border rounded-pill"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    ارسال
                  </button>
                </div>
              ) : (
                <div className="mb-3">
                  <button
                    className="btn btn-primary border rounded-pill"
                    onClick={() => navigate("/login")}
                  >
                    سجل دخولك
                  </button>
                </div>
              )}
            </Form>
          </section>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default SpecialOrder;
