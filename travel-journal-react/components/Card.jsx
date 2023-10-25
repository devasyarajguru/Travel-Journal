import PropTypes from 'prop-types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Card(props)
{
    Card.propTypes ={
        data:PropTypes.shape({
        title: PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        date:PropTypes.string.isRequired,
        country:PropTypes.string.isRequired,
        imgsrc:PropTypes.string.isRequired
        }).isRequired
    };

    return(
        <>
            <div className="card--container">
                <img src={`../images/${props.data.imgsrc}`}></img>
                <div className='card--content'>
                    <div className='card--location'>
                       <span><LocationOnIcon color='error'/></span> <span className='card--location-text'>{props.data.country}</span> <span className='card--location-maps'>View on Google Maps</span>  
                    </div>
                    <div className='card--title'>
                       <b> {props.data.title} </b>
                    </div>
                    <div className='card--date'>
                       <b> {props.data.date} </b>
                    </div>
                    <div className='card--desc'>
                        {props.data.description}
                    </div>
                </div>
            </div>
        </>
    )
}