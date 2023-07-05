export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-body__left">
          <div className="footer-brand">
            <div className="footer-brand__logo"><span>LOGO</span></div>
            <div className="footer-brand__description">
              <span>
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem
              </span>
            </div>
          </div>
        </div>
        <div className="footer-body__right">
          <div className="footer-links">
            <div className="footer-links__title">Sections</div>
            <div className="footer-links__items">
              <div className="footer-links__item"><a href="#">Home</a></div>
              <div className="footer-links__item"><a href="#">Home1</a></div>
              <div className="footer-links__item"><a href="#">Home2</a></div>
              <div className="footer-links__item"><a href="#">Home3</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-contacts">
        <div className="footer-contacts__left">
          <span>All Rights Reservd red-code.it 2023</span>
        </div>
        <div className="footer-contacts__right">
          <div className="footer-contacts__list">
            <div className="footer-contacts__item">Linkedin</div>
            <div className="footer-contacts__item">Instagram</div>
            <div className="footer-contacts__item">Phone</div>
          </div>
        </div>
      </div>
    </div>
  );
}
