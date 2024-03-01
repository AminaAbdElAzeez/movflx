import { Fragment, useEffect, useState } from 'react';
import './TopBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function TopBtn() {
    const [top , setTop] = useState (false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setTop(true)
            }else {
                setTop(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }

    return (
        <Fragment>
            {top && (
                <button onClick={scrollUp} className='top-btn'>
                    <FontAwesomeIcon icon={faChevronUp}/>
                </button>
            )}
        </Fragment>
    )
}

export default TopBtn
