import './HeadingTitle.css';

const HeadingTitle = ({title,subTitle}) => {
  return (
    <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
            <h6 className='top-sub-title'>{subTitle}</h6>
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default HeadingTitle
