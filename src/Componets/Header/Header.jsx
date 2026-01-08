import "../Header/Header.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <>
      <div className="commonContainer">
        <div className="innerContainer">
          <div className="leftDiv">
            <ul>
              <li>Netflix</li>
              <li className="hide">Home</li>
              <li className="hide">TvShow</li>
              <li className="hide">Movies</li>
              <li className="hide">Latest</li>
              <li className="hide">MyList</li>
              <li className="hide">Browes by language</li>
            </ul>
          </div>
          <div className="rightDiv">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
