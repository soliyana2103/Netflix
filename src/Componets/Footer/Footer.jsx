
import "../Footer/Footer.css"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocalSeeOutlinedIcon from "@mui/icons-material/LocalSeeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
function Footer() {
  return (
    <>
     <div className="footerOuter">
      <div className="footerInner">

        <div className="one">
<div className="iconContainer">
  <li><FacebookOutlinedIcon/></li>
  <li><LocalSeeOutlinedIcon/></li>
  <li><SubscriptionsOutlinedIcon/></li>
</div>
<div>
  <li>Audio Description</li>
  <li>Investor Relations</li>
  <li>Legal Notice</li>
  <li>Service Code</li>
  <li>&copy; 1997-2024 Netflix, Inc.</li>
</div>



        </div>
        <div className="two">

<div>
  <li>Help Center</li>
  <li>Jobs</li>
  <li>Cookie Preferences</li>
</div>
        </div>
        <div className="three">

<li>Gift Cards</li>
<li>Terms of Use</li>
<li>Corporate Information</li>
        </div>
        <div className="four">

<li>Media Center</li>
<li>Privacy</li>
<li>Contact Us</li>
        </div>

      </div>


      </div> 
    </>
  )
}

export default Footer
