import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='contact_info'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                            <div className='contact_info_item d-flex justify-content-start-align-items-center'>
                                
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                    <i class="zmdi zmdi-phone material-icons-name"></i>
                                        Phone
                                    </div>
                                    <div className='contact_info_text'>
                                        +91 1111 543 2198
                                    </div>

                                </div>

                            </div>
                            <div className='contact_info_item d-flex justify-content-start-align-items-center'>
                                
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                        Email
                                    </div>
                                    <div className='contact_info_text'>
                                        Biogene.h.laboratory.in
                                    </div>

                                </div>

                            </div>
                            <div className='contact_info_item d-flex justify-content-start-align-items-center'>
                                
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                    <i class="zmdi zmdi-city material-icons-name"></i>
                                        Address
                                    </div>
                                    <div className='contact_info_text'>
                                        Vaishali, BH, India
                                    </div>

                                </div>

                            </div>



                        </div>

                    </div>

                </div>
                <div className='contact-form'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-10 offset-lg-1'>
                                <div className='contact_form_container py-5'>
                                    <div className='contact_form_title'>
                                       <h5> Get in Touch with us!</h5></div>
                                    <form className='contact-form' id='contact_form'>
                                        <div  id='contact-head' className='contact_form_name d-flex justify-content-between align-items-between'>
                                            <input type="text" id='contact_form_name' className='contact_form_name input_field'
                                                placeholder='Your Name' required="true" />

                                            <input type="email" id='contact_form_email' className='contact_form_email input_field'
                                                placeholder='Your Email' required="true" />

                                            <input type="number" id='contact_form_phone' className='contact_form_phone input_field'
                                                placeholder='Your Phone Number' required="true" />


                                        </div>
                                        <div className='contact_form_text mt-5'>
                                            <textarea className='text_field_contact_form_message' placeholder='Message' cols="30" rows="10"></textarea>
                                        </div>

                                        <div className='contact_form_button'>
                                            <button type='submit' className='button contact_submit_button'>Send Message</button>

                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact