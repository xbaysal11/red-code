export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-body__left">
          <div className="footer-brand">
            <div className="footer-brand__logo"></div>
            <div className="footer-brand__description">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </div>
          </div>
        </div>
        <div className="footer-body__right">
          <div className="footer-links">
            <div className="footer-links__title">Sections</div>
            <div className="footer-links__items">
              <div className="footer-links__item">Home</div>
              <div className="footer-links__item">Home 2</div>
              <div className="footer-links__item">Home 3</div>
              <div className="footer-links__item">Home 4</div>
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
