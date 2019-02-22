import React from 'react'
import Header from '../components/layouts/Header';
import Body from '../components/layouts/Body';
import Footer from '../components/layouts/Footer';

const content = (
    <div>
        <div>Not Found</div>
    </div>
);

const ErrorPage = () =>
    < div >
        <Header />
        <Body content={content} />
        <Footer />
    </div >

export default ErrorPage;
