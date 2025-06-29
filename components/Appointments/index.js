import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentsList: [],
    showStarred: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      Title: title,
      Datex: date,
      isStarred: false,
    }
    this.setState(prev => ({
      title: '',
      date: '',
      appointmentsList: [...prev.appointmentsList, newAppointment],
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    console.log(event.target.value)
    this.setState({date: event.target.value})
  }

  onClickStar = id => {
    this.setState(prev => ({
      appointmentsList: prev.appointmentsList.map(each =>
        each.id === id ? {...each, isStarred: !each.isStarred} : each,
      ),
    }))
  }

  onClickStarred = () => {
    this.setState(prev => ({showStarred: !prev.showStarred}))
  }

  render() {
    const {title, date, appointmentsList, showStarred} = this.state
    const filteredList = showStarred
      ? appointmentsList.filter(each => each.isStarred)
      : appointmentsList

    const starredClassName = showStarred ? 'star-button' : 'normal-button'

    return (
      <div className="main-container">
        <div className="card">
          <div className="appointment-input-container">
            <div className="form-container">
              <h1 className="form-heading">Add Appointment</h1>
              <form className="form" onSubmit={this.onAddAppointment}>
                <div className="input-group">
                  <label htmlFor="title" className="input-label">
                    TITLE
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    placeholder="Title"
                    className="input-field"
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="date" className="input-label">
                    DATE
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    className="input-field"
                    onChange={this.onChangeDate}
                  />
                </div>
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="appointment-img"
              alt="appointments"
            />
          </div>
          <div className="appointment-container">
            <div className="appointment-header">
              <h1 className="appointment-heading">Appointments</h1>
              <button
                type="button"
                className={starredClassName}
                onClick={this.onClickStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointment-list">
              {filteredList.map(each => (
                <AppointmentItem
                  key={each.id}
                  details={each}
                  onClickStar={this.onClickStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
 
