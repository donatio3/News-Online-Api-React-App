import { useState } from "react"
import { Formik, Form, Field, ErrorMessage, useField, useFormik} from 'formik';
import * as Yup from 'yup';

import AppHeader from "../appHeader/AppHeader"
import AsideBlock from "../asideBlock/AsideBlock"
import NavigationBlock from "../navigationBlock/NavigationBlock"

import NewsService from "../../services/NewsService";
import SubmitResponse from "../../services/SubmitResponse";

import './contact.scss'
import Spinner from "../spiner/Spinner";

// function validateEmail(value) {
//     if (!value) {
//         return 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//         return 'Invalid Email'
//     }
// }



const Contact = () => {

    const [responseOutput, setResponseOutput] = useState(null) 
    const [messageResponse, setMessageResponce] = useState()

    const {request, loading, setLoading, setError, error} = SubmitResponse()

    function handleSubmit(values, { resetForm }) {
        // handle form submission
        handleUploadInput(values)
        resetForm();
    }

    const handleUploadInput =  (values) => {
        
        setLoading(true)
        const formData = values
        
        request(values)
        .then(res => {
            setResponseOutput(true)
            setMessageResponce('Thank you for your message. It has been sent.')
        })
        .catch(res => {
            setResponseOutput(false)
            setMessageResponce('Something is went wrong, try it again later.')
            setError(true)
        })
        .finally(res => {
            setLoading(false)
            
        })

       
    }

    

    return (
        <>
            <AppHeader searchBlock={false}/>

            <NavigationBlock type="other" title="Contact"/>

            <section className="contact">
                <div className="container">

                    <div className="content__wrapper">

                        <div className="contact-form">
                            <header class="entry-header">
                                <h2 class="entry-title">Contact</h2>
                            </header>

                    
                            <Formik
                                    initialValues={{
                                    name: '',
                                    email: '',
                                    subject: '',
                                    message: '',
                                    }}
                                    validationSchema = {Yup.object({
                                        name: Yup.string()
                                            .min(2, 'Минимум 2 символа')
                                            .required("Обезательное поле"),
                                        email: Yup.string() 
                                                .email("Неправильный email адресс")
                                                .required("Обезательное поле!"),
                                        subject: Yup.string()
                                                    .min(5, 'Не менее 5 символов')
                                                    .required("Обезательное поле!"),
                                        message: Yup.string()
                                                    .required('required').min(2, '2 СИМВОЛА МИН'),
                                    })}
                                    onSubmit={handleSubmit}
                            >
                            
                            {({ errors, touched, handleBlur, handleChange }) => (

                                <Form aria-label="Contact form">    
                                    <div className="inputs">

                                        <div className="wrapper-inputs">
                                            <label> Your Name </label>

                                            <Field as={'input'}  className="input-item"  required 
                                            id="name" 
                                            type="text" 
                                            name="name"
                                            />
                                            
                                            {touched.name && errors.name && <div>{errors.name}</div>}
                                        </div>
                                        <div className="wrapper-inputs">
                                            <label> Your Email</label>
                        
                                            <Field className="input-item"
                                             required 
                                            id="email"
                                            type="text" 
                                            name="email"/>
                                            {touched.email && errors.email && <div>{errors.email}</div>}

                                        </div>
                                        <div className="wrapper-inputs">
                                            <label> Subject</label>
                                            <Field className="input-item" required
                                            id="subject"
                                            type="text"
                                            name="subject"/>
                                            {touched.subject && errors.subject && <div>{errors.subject}</div>}

                                        </div>
                                        <div className="wrapper-inputs">
                                            <label> Your Message</label>
                                            <Field as='textarea'required
                                            id="message"
                                            type="text"
                                            name="message"/>
                                            {touched.message && errors.message && <div>{errors.message}</div>}

                                        </div>
                                    

                                        <div className="button-send">
                                            <button className="submit" type="submit">SEND</button>
                                            {loading && !error ? <Spinner/> : null}
                                        </div>
                                    </div>
                                </Form>
                            )}
                            </Formik>

                            

                            <div style={{display: responseOutput === null ? 'none' : 'block'}} className="entry-message">
                                <div style={{ border: responseOutput ? '2px solid #46b450' : '2px solid #ffb900'}} className="response">
                                    {messageResponse}
                                </div>
                            </div>

                            <div className="border"></div>
                        </div>

                        <AsideBlock/>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Contact