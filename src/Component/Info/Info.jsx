import './Info.css';

function Info () {
    return (
        <div className='info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='left'>
                            <h2 className='title'>trial start first 30 days.</h2>
                            <p>Enter your email to create or restart your membership.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='right'>
                            <form>
                                <input type='email' placeholder='Enter your Email...'/>
                                <input type='submit' value='get started'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
