import {format, parse} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {details, onClickStar} = props
  const {Title, Datex, id, isStarred} = details

  const starUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStarHandler = () => {
    onClickStar(id)
  }

  const parsedDate = parse(Datex, 'yyyy-MM-dd', new Date())
  const formattedDate = Number.isNaN(parsedDate)
    ? 'Invalid Date'
    : format(parsedDate, 'dd MMMM yyyy, EEEE')

  return (
    <li className="appointment-item">
      <div className="appointment-details">
        <p className="title">{Title}</p>
        <p className="date">{formattedDate}</p>
      </div>
      <button
        type="button"
        className="bx"
        data-testid="star"
        onClick={onClickStarHandler}
      >
        <img src={starUrl} className="star" alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
 
