import Logo from "../images/PageLogo.png";
import style from "../style/PageLogo.module.css"

function PageLogo() {
  return (
    <>
      <div className={style.pageLogoContainer}>
        <img src={Logo} alt="Page Logo" className={style.pageLogo}/>
      </div>
    </>
  );
}

export default PageLogo;
