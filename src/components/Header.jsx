export default function Header() {
  return (
    <div className="header">
      <div className="header-body">
        <div className="header-body__left">logo</div>
        <div className="header-body__right">
          <div className="navigation">
            <ul>
              <li>
                <a href="#">menu</a>
              </li>
              <li>
                <a href="#">menu</a>
              </li>
              <li>
                <a href="#">menu</a>
              </li>
            </ul>
          </div>

          <div className="header-button">
            <button className="button__default" onClick={()=> console.log("click contact us!")}>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
