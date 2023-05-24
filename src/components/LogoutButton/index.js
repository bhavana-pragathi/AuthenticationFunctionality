import './index.css'

const LogoutButton = props => {
  const {logoutClick} = props
  const onClickLogout = () => {
    logoutClick()
  }

  return (
    <div className="body-div">
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
