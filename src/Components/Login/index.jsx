import React from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./login.css";
import { Container } from "react-bootstrap";

const errorStyling = {
  color: "rgb(255,255,255)",
};
const labelStyle = {
  color: "rgb(255,255,255)",
  fontSize: "15px",
};
const loginBtnStyle = {
  background: "rgb(210,141,8)",
  color: "rgb(0,0,0)",
  borderWidth: "0px",
  borderColor: "rgb(210,141,8)",
};
const fbgmBtnStyle = {
  background: "rgb(210,141,8)",
  color: "rgb(0,0,0)",
  bordeWidth: "0px",
};
/*
login page with formik form and validation , it will be editied with firebase authentications ofcourse
*/
const Login = () => (
  <div className="special-order-page">
    <Header />
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const onealpha = /[a-z]/i;
        const onenum = /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/i;
        const errors = {};
        if (!values.email) {
          errors.email = "البريد الالكتروني مطلوب";
        } else if (!emailRegex.test(values.email)) {
          errors.email = "البريد الالكتروني غير صالح";
        }
        if (!values.password) {
          errors.password = "كلمة السر مطلوبة";
        } else if (!onealpha.test(values.password)) {
          errors.password = "At least 1 lowercase or uppercase letter";
        } else if (!onenum.test(values.password)) {
          errors.password = "رقم او رمز واحد على الاقل مطلوب";
        }
        return errors;
      }}
    >
      {() => (
        <section
          className="register-photo"
          style={{ background: "rgb(121,10,10)" }}
        >
          <Container className="form-container">
            <div className="image-holder"></div>
            <Form style={{ background: "#850b0b" }}>
              <h1 style={{ color: "rgb(255,255,255)" }}>
                <br />
                <strong>! مرحبا بعودتك</strong>
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
                  id="exampleInputPassword"
                  autoComplete="password"
                  htmlFor="password"
                  className="border rounded-pill form-control form-control-user"
                  type="password"
                  placeholder="كلمة السر"
                  name="password"
                  minLength="6"
                  maxLength="50"
                  required
                />
              </div>
              <ErrorMessage
                name="password"
                render={(msg) => (
                  <div type="invalid" style={errorStyling}>
                    {"! " + msg + " *"}
                  </div>
                )}
              />

              <div className="mb-3">
                <div className="custom-control custom-checkbox small">
                  <div className="form-check">
                    <input
                      id="formCheck-1"
                      className="form-check-input custom-control-input"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label custom-control-label"
                      htmlFor="formCheck-1"
                      style={labelStyle}
                    >
                      تذكرني
                    </label>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-primary border rounded-pill d-block btn-user w-100"
                type="submit"
                style={loginBtnStyle}
              >
                تسجيل الدخول
              </button>

              <hr style={{ background: "rgb(0,0,0)" }} />
              <a
                className="btn btn-primary border rounded-pill d-block btn-google btn-user w-100 mb-2"
                role="button"
                href="#firebase/google"
                style={fbgmBtnStyle}
              >
                <i className="fab fa-google"></i>  تسجيل باستخدام جوجل
              </a>
              <a
                className="btn btn-primary border rounded-pill d-block btn-facebook btn-user w-100"
                role="button"
                href="#firebase/facebook"
                style={fbgmBtnStyle}
              >
                <i className="fab fa-facebook-f"></i>  تسجيل باستخدام فيسبوك
              </a>
              <hr style={{ background: "rgb(0,0,0)" }} />
              <div className="text-center">
                <a
                  className="small"
                  href="#forgetpass"
                  style={{ color: "rgb(255,255,255)" }}
                >
                  نسيت كلمة المرور ؟
                </a>
              </div>
              <div className="text-center">
                <a
                  className="small"
                  href="/signup"
                  style={{ color: "rgb(255,255,255)" }}
                >
                  انشاء حساب
                </a>
              </div>
            </Form>
          </Container>
        </section>
      )}
    </Formik>
    <Footer />
  </div>
);

export default Login;
