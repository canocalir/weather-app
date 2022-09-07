import HeaderSearch from "../../components/HeaderSearch/HeaderSearch"
import './HeaderContainer.scss'

function HeaderContainer() {
  return (
    <div className="header-container">
      <h1>Weather Foreseer</h1>
      <HeaderSearch/>
    </div>
  )
}

export default HeaderContainer