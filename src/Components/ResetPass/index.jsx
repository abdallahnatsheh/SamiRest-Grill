import React from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./resetpass.css";
import { Container } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import * as Yup from "yup";

const errorStyling = {
  color: "rgb(255,255,255)",
};

const loginBtnStyle = {
  background: "rgb(210,141,8)",
  color: "rgb(0,0,0)",
  borderWidth: "0px",
  borderColor: "rgb(210,141,8)",
};

/*
reset password page to change the password
*/
const ResetPass = () => {
  const { resetPassword } = useAuth();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return (
    <div className="special-order-page">
      <Header />
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async (values, actions) => {
          await resetPassword(values.email);
          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("البريد الالكتروني غير صالح")
            .matches(emailRegex, "البريد الالكتروني غير صالح")
            .required("البريد الالكتروني مطلوب"),
        })}
      >
        {({ isSubmitting }) => (
          <section
            className="register-photo"
            style={{ background: "rgb(121,10,10)" }}
          >
            <Container className="form-container">
              <div className="image-holder"></div>
              <Form style={{ background: "#850b0b" }}>
                <h1 style={{ color: "rgb(255,255,255)" }}>
                  <br />
                  <strong> تغيير كلمة المرور </strong>
                  <br />
                  <br />
                </h1>

                <div className="mb-3">
                  <Field
                    id="exampleInputEmail"
                    htmlFor="email"
                    autoComplete="email"
                    className="border rounded-pill form-control form-control-user"
                    type="email"
                    aria-describedby="emailHelp"
                    placeholder="البريد الالكتروني"
                    name="email"
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
                  <div className="custom-control custom-checkbox small"></div>
                </div>

                <button
                  className="btn btn-primary border rounded-pill d-block btn-user w-100"
                  type="submit"
                  style={loginBtnStyle}
                  disabled={isSubmitting}
                  onClick={async () => await resetPassword()}
                >
                  تغيير كلمة المرور
                </button>
              </Form>
            </Container>
          </section>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default ResetPass;
