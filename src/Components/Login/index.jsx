import React, { useState } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./login.css";
import { Button, Container } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import * as Yup from "yup";
import Reaptcha from "reaptcha";

const errorStyling = {
  color: "rgb(255,255,255)",
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
login page with formik form and validation , now its connected with firebase 
*/
const Login = () => {
  //importing authentication function from authentication context
  const { login, loginWithGoogle } = useAuth();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const onealpha = /[a-z]/i;
  const onenum = /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/i;
  const TEST_SITE_KEY = "6LfFnrQeAAAAAOJrOzbsUEjenIEzjwzl92ujj5qB";
  const [capVerify, setCapVerify] = useState("");
  const onVerify = () => {
    setCapVerify(true);
  };

  return (
    <div className="special-order-page">
      <Header />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values, actions) => {
          if (capVerify) await login(values.email, values.password);
          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("البريد الالكتروني غير صالح")
            .matches(emailRegex, "البريد الالكتروني غير صالح")
            .required("البريد الالكتروني مطلوب"),
          password: Yup.string()
            .min(6, "كلمة السر يجب ان تكون ستة منازل على الاقل")
            .max(50, "لقد تجاوزت الحد المسموح ")
            .matches(onealpha, "على الاقل حرف واحد كبير او صغير")
            .matches(onenum, "رقم او رمز واحد على الاقل")
            .required("كلمة السر مطلوبة"),
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
                <Reaptcha sitekey={TEST_SITE_KEY} onVerify={onVerify} />
                <button
                  className="btn btn-primary border rounded-pill d-block btn-user w-100"
                  type="submit"
                  style={loginBtnStyle}
                  disabled={isSubmitting || !capVerify}
                >
                  تسجيل الدخول
                </button>
                <hr style={{ background: "rgb(0,0,0)" }} />
                <Button
                  className="btn btn-primary border rounded-pill d-block btn-google btn-user w-100 mb-2"
                  role="button"
                  style={fbgmBtnStyle}
                  onClick={async () => await loginWithGoogle()}
                >
                  <i className="fab fa-google"></i>  تسجيل باستخدام جوجل
                </Button>
                <hr style={{ background: "rgb(0,0,0)" }} />
                <div className="text-center">
                  <a
                    className="small"
                    style={{ color: "rgb(255,255,255)" }}
                    href="/reset-password"
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
};

export default Login;
