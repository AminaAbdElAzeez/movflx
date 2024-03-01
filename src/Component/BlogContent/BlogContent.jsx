import './BlogContent.css';
import BlogLeft from '../BlogLeft/BlogLeft';
import BlogRight from '../BlogRight/BlogRight';


function BlogContent() {
    return (
        <div className='blog-content'>
            <div className='overlay'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                            <BlogLeft/>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <BlogRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent
