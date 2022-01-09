import React from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./specialorder.css";
/*
the special order  form using formik library for ordering meals that are not existed in the menu 
 name,quantity ,and describtion using regex to detect if theres
unrequired charachter inserted , it only support arabic and english languages
its only for customers not for every one so it doesnt contain email or phone numbers
*/
const errorStyling = {
  color: "rgb(255,255,255)",
};

const SpecialOrder = () => (
  <div className="special-order-page">
    <Header />
    <Formik
      initialValues={{
        name: "",
        quantity: "",
        describtion: "",
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const errors = {};
        const nameRegex = /^[a-zA-Z ]*$/i;
        const descRegex = /^[a-zA-Z0-9 ]*$/i;
        const nameArabicRegex = /^[\u0621-\u064A\u0660-\u0669 ]+$/i;
        if (!values.name) {
          errors.name = "الاسم مطلوب";
        } else if (
          !nameArabicRegex.test(values.name) &&
          !nameRegex.test(values.name)
        ) {
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
          (!descRegex.test(values.describtion) &&
            !nameArabicRegex.test(values.describtion))
        ) {
          errors.describtion = "الوصف غير صالح";
        }

        return errors;
      }}
    >
      {() => (
        <section className="contact-clean" style={{ background: "rgb(0,0,0)" }}>
          <Form style={{ background: "rgb(121,10,10)" }}>
            <h2 className="text-center" style={{ color: "rgb(255,255,255)" }}>
              طلبية خاصة{" "}
            </h2>

            <div className="mb-3">
              <Field
                className="form-control"
                type="text"
                htmlFor="name"
                name="name"
                placeholder="اسم الوجبة"
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
                className="form-control is-invalid"
                type="number"
                name="quantity"
                placeholder="الكمية"
                required
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

export default SpecialOrder;
