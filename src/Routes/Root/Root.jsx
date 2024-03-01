import React, { Fragment, useEffect, useState } from 'react'
import Navbars from '../../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Info from '../../Component/Info/Info'
import Footer from '../../Component/Footer/Footer'
import TopBtn from '../../Component/TopBtn/TopBtn'
import { FadeLoader } from 'react-spinners';
import './Root.css'

function Root() {
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        },2000)
    },[])

    return (
        <div className='root'>
        {
            loading ?
            <FadeLoader
            className='spin'
                color={"#a21026"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            :
                <Fragment>
                    <Navbars/>
                    <div className='main'>
                        <Outlet/>
                    </div>
                    <TopBtn/>
                    <Info/>
                    <Footer/>
                </Fragment>
        }
        </div>
    )
}

export default Root
