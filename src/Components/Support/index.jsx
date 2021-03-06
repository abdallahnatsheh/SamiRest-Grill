import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { NotificationManager } from "react-notifications";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.Config";
import "./support.css";
/*
the customer support form using formik library for form managing and validations 
the form perform check on email , name , password using regex to detect if theres
unrequired charachter inserted , it only support arabic and english languages

any user even if he's not signed in cant fill the customer support form and send it 
*/
const errorStyling = {
  color: "rgb(255,255,255)",
};

const Support = () => (
  <div className="support-page">
    <Header />
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        describtion: "",
      }}
      onSubmit={async (values, actions) => {
        const orderResult = collection(db, "cSupport");
        await addDoc(orderResult, {
          name: values.name,
          email: values.email,
          phone: values.phone,
          describtion: values.describtion,
        })
          .then(function () {
            NotificationManager.success(" تم الطلب بنجاح ", "نجح");
          })
          .catch(function () {
            NotificationManager.warning("خطأ في الخدمة", "خطأ", 1000);
          });
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const errors = {};
        const emailRegex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const nameRegex = /^[a-zA-Z ]*$/i;
        const nameArabicRegex = /^[\u0621-\u064A\u0660-\u0669 ]+$/i;
        const descRegex = /^[a-zA-Z0-9 ]*$/i;
        const phoneRegex = /^\+?(972|0)()?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/i;
        if (!values.name) {
          errors.name = "الاسم مطلوب";
        } else if (
          !nameArabicRegex.test(values.name) &&
          !nameRegex.test(values.name)
        ) {
          errors.name = "الاسم غير صالح";
        }
        if (!values.email) {
          errors.email = "البريد الالكتروني مطلوب";
        } else if (!emailRegex.test(values.email)) {
          errors.email = "البريد الالكتروني غير صالح";
        }
        if (!phoneRegex.test(values.phone) && !values.phone) {
          errors.phone = "رقم الهاتف غير صالح";
        }
        if (!values.describtion) {
          errors.describtion = "الوصف مطلوب";
        } else if (
          !values.describtion ||
          (!descRegex.test(values.describtion) &&
            !nameArabicRegex.test(values.describtion))
        ) {
          errors.describtion = "الوصف غير صالح";
        }

        return errors;
      }}
    >
      {({ isSubmitting }) => (
        <section className="contact-clean" style={{ background: "rgb(0,0,0)" }}>
          <Form style={{ background: "rgb(121,10,10)" }}>
            <h2 className="text-center" style={{ color: "rgb(255,255,255)" }}>
              الدعم الفني و الاستفسارات
            </h2>

            <div className="mb-3">
              <Field
                className="form-control"
                type="text"
                htmlFor="name"
                name="name"
                placeholder="الاسم*"
                minLength="2"
                maxLength="50"
                required
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
                id="exampleInputEmail"
                htmlFor="email"
                autoComplete="email"
                className=" form-control form-control-user"
                type="email"
                aria-describedby="emailHelp"
                placeholder="البريد الالكتروني*"
                name="email"
                minLength="10"
                maxLength="100"
                pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}"
                required
              />
            </div>
            <ErrorMessage
              name="email"
              render={(msg) => (
                <div type="invalid" style={errorStyling}>
                  {"! " + msg + " *"}
                </div>
              )}
            />

            <div className="mb-3">
              <Field
                className="form-control"
                type="text"
                htmlFor="phone"
                name="phone"
                placeholder="رقم الهاتف"
                minLength="7"
                maxLength="15"
              />
            </div>
            <ErrorMessage
              name="phone"
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
                placeholder="الوصف*"
                rows="14"
                minLength="10"
                maxLength="100"
                required
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

            <div className="mb-3">
              <button
                className="btn btn-primary border rounded-pill"
                type="submit"
                disabled={isSubmitting}
              >
                ارسال
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
    <Footer />
  </div>
);

export default Support;
