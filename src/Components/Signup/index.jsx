import React from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./signup.css";
import { Container } from "react-bootstrap";
/*sign up form with formik library and regex validations */
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

const Signup = () => (
  <div className="special-order-page">
    <Header />
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordRepeat: "",
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
          errors.password = "على الاقل حرف واحد كبير او صغير";
        } else if (!onenum.test(values.password)) {
          errors.password = "رقم او رمز واحد على الاقل";
        }
        if (!values.passwordRepeat) {
          errors.passwordRepeat = "تكرار كلمة السر مطلوب";
        } else if (!onealpha.test(values.passwordRepeat)) {
          errors.passwordRepeat = "على الاقل حرف واحد كبير او صغير";
        } else if (!onenum.test(values.passwordRepeat)) {
          errors.passwordRepeat = "رقم او رمز واحد على الاقل";
        }
        if (!(values.password === values.passwordRepeat)) {
          errors.passwordRepeat = "كلمات السر ليست متطابقة";
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
            <Form
              style={{ background: "#850b0b", borderColor: "var(--bs-red)" }}
            >
              <h2 className="text-center" style={{ color: "rgb(255,255,255)" }}>
                <strong>انشئ</strong> حسابك
              </h2>

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
                <Field
                  className="border rounded-pill form-control"
                  type="password"
                  autoComplete="password"
                  name="passwordRepeat"
                  placeholder="تكرار كلمة السر"
                  minLength="6"
                  maxLength="50"
                  required
                />
              </div>
              <ErrorMessage
                name="passwordRepeat"
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
                      انا اوافق على سياسات الترخيص
                    </label>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-primary border rounded-pill d-block btn-user w-100"
                type="submit"
                style={loginBtnStyle}
              >
                اشتراك
              </button>

              <div className="text-center">
                <a
                  className="already"
                  href="/login"
                  style={{ color: "rgb(255,255,255)", paddingTop: "15px" }}
                >
                  الديك حساب بالفعل ؟ سجل الان
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

export default Signup;
