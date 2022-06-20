import React, { useState } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./signup.css";
import { Alert, Container } from "react-bootstrap";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";
import Reaptcha from "reaptcha";

/*sign up form with formik library and regex validations */
const errorStyling = {
  color: "rgb(255,255,255)",
};
const labelStyle = {
  color: "rgb(255,255,255)",
  fontSize: "10px",
  fontWeight: "bold",
};
const loginBtnStyle = {
  background: "rgb(210,141,8)",
  color: "rgb(0,0,0)",
  borderWidth: "0px",
  borderColor: "rgb(210,141,8)",
};
//sign up component with validation and connected to firebase
const Signup = () => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const onealpha = /[a-z]/i;
  const onenum = /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/i;
  const { signUp } = useAuth();
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
          passwordRepeat: "",
        }}
        onSubmit={async (values) => {
          if (capVerify) await signUp(values.email, values.password);
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
          passwordRepeat: Yup.string()
            .oneOf([Yup.ref("password"), null], "كلمات السر ليست متطابقة")
            .min(6, "كلمة السر يجب ان تكون ستة منازل على الاقل")
            .max(50, "لقد تجاوزت الحد المسموح ")
            .required("تأكيد كلمة السر مطلوب"),
        })}
      >
        {({ isSubmitting }) => (
          <section
            className="register-photo"
            style={{ background: "rgb(121,10,10)" }}
          >
            <Container className="form-container">
              <div className="image-holder"></div>
              <Form
                style={{ background: "#850b0b", borderColor: "var(--bs-red)" }}
              >
                <h2
                  className="text-center"
                  style={{ color: "rgb(255,255,255)" }}
                >
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
                <div className="mb-3">
                  <Field
                    className="border rounded-pill form-control"
                    type="password"
                    autoComplete="password"
                    name="passwordRepeat"
                    placeholder="تكرار كلمة السر"
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

                <div className="mb-3" name="acceptTerms">
                  <div
                    className="custom-control custom-checkbox small"
                    name="acceptTerms"
                  >
                    <div className="form-check" name="acceptTerms">
                      <label style={labelStyle}>
                        عند تسجيل الاشتراك فأنت توافق على اتفاقية
                        <Alert.Link href="/terms"> الترخيص</Alert.Link> و
                        <Alert.Link href="/privacy">الخصوصية</Alert.Link>
                      </label>
                    </div>
                  </div>
                </div>
                <Reaptcha sitekey={TEST_SITE_KEY} onVerify={onVerify} />
                <button
                  className="btn btn-primary border rounded-pill d-block btn-user w-100"
                  type="submit"
                  style={loginBtnStyle}
                  disabled={isSubmitting || !capVerify}
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
};

export default Signup;
