import ContactsTop from '../../Component/ContactsTop/ContactsTop'
import ContactInfo from '../../Component/ContactInfo/ContactInfo'
import Map from '../../Component/Map/Map'

function Contacts () {
    return (
        <div className='contacts'>
            <ContactsTop/>
            <ContactInfo/>
            <Map/>
        </div>
    )
}

export default Contacts
