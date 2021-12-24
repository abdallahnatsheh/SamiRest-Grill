import React from "react";
import Header from '../MainPage/Header'
import Footer from '../MainPage/Footer'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import "./specialorder.css"
/**
 <section class="contact-clean" style="background: rgb(0,0,0);">
    <form method="post" style="background: rgb(121,10,10);">
        <h2 class="text-center" style="color: rgb(255,255,255);">Contact us</h2>
        <div class="mb-3"><input class="form-control" type="text" name="name" placeholder="Name" required /></div>
        <div class="mb-3"><input class="form-control is-invalid" type="number" name="quantity" placeholder="Quantitiy" required minlength="1" maxlength="4" pattern="numbers" /></div>
        <div class="mb-3"><textarea class="form-control" name="message" placeholder="describtion" rows="14" required></textarea></div>
        <div class="mb-3"><button class="btn btn-primary border rounded-pill" type="submit" style="color: rgb(255,255,255);background: #d28d08;">send </button></div>
    </form>
</section>
 */
const errorStyling = {
    color: "rgb(255,255,255)",
}

const SpecialOrder = () => (
    <div className="special-order-page">
       <Header/>
       <Formik
    initialValues={{
      name: '',
      quantity : '',
      describtion: '',
    }}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }}
    validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      const errors = {};
      const nameRegex = /^[a-zA-Z ]*$/i;
      const descRegex = /^[a-zA-Z0-9 ]*$/i;
      if(!values.name) {
        errors.name = 'Name Required'
      }
      if(!nameRegex.test(values.name)) {
        errors.name = 'Name not valid'
      }
      if(!values.quantity) {
        errors.quantity = 'quantity Required'
      }
      if( values.quantity < 0 || values.quantity > 1000) {
        errors.quantity = 'insert proper quantity '
      }
      if(!values.describtion) {
        errors.describtion = 'Describtion Required'
      }
      if(!values.describtion  || !descRegex.test(values.describtion)) {
        errors.describtion = 'describtion not valid'
      }
      
      return errors;
    }}
  >
  {() => (
    <section className="contact-clean" style={{background: "rgb(0,0,0)"}}>
    <Form  style={{background: "rgb(121,10,10)"}}>
        <h2 className="text-center" style={{color: "rgb(255,255,255)"}}>Special Order طلبية خاصة </h2>

        <div className="mb-3"><Field className="form-control" type="text"  htmlFor="name" name="name" placeholder="Name" required /></div>
        <ErrorMessage name="name" render={msg =>  <div type="invalid" style={errorStyling}>{"* "+msg+" !"}</div>}/>

        <div className="mb-3"><Field className="form-control is-invalid" type="number" name="quantity" placeholder="Quantitiy" required pattern="numbers" /></div>
        <ErrorMessage name="quantity" render={msg =>  <div type="invalid" style={errorStyling}>{"* "+msg+" !"}</div>} />

        <div className="mb-3"><Field className="form-control" name="describtion" component="textarea" placeholder="describtion" rows="14" required/></div>
        <ErrorMessage name="describtion"  render={msg =>  <div type="invalid" style={errorStyling}>{"* "+msg+" !"}</div>}/>

        <div className="mb-3"><button className="btn btn-primary border rounded-pill" type="submit">send</button></div>
    </Form>
    </section>

  )}
  </Formik>
        <Footer/>
    </div>
    );

export default SpecialOrder;