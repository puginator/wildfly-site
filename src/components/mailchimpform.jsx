import React from "react";  
import MailchimpSubscribe from "react-mailchimp-subscribe";



const MailchimpFormContainer = props => {

    const postUrl = 'https://gmail.us14.list-manage.com/subscribe/post?u=f20713e0b3c1d90094bc6b50e&id=e6669a8b46'

    return (
        <div className="mailchimp">
            <MailchimpSubscribe url={postUrl} />
        </div>
    )
}

export default MailchimpFormContainer;