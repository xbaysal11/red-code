import { pricingList } from "../constants";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing-content">
        <div className="pricing-header">
          <div className="pricing-header__title">Pricing</div>
          <div className="pricing-header__tabs"></div>
        </div>
        <div className="pricing-body">
          <div className="pricing-cards">
            {pricingList.map((item) => (
              <div className="pricing-card" key={item.id}>
                <div className="pricing-card__icon">{item.icon}</div>
                <div className="pricing-card__title">{item.title}</div>
                <div className="pricing-card__divider"></div>
                <div className="pricing-card__privileges">
                  {item.privileges.map((i, idx) => (
                    <div className="pricing-card__privilege" key={idx}>
                      <div
                        className={`${"pricing-card__privilege-status"} ${
                          !i.isAvailable && "unaviable"
                        }`}
                      >
                        {i.isAvailable ? "+" : "-"}
                      </div>
                      <div
                        className={`${"pricing-card__privilege-name"} ${
                          !i.isAvailable && "unaviable"
                        }`}
                      >
                        {i.name}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pricing-card__divider"></div>
                <div className="pricing-card__footer">
                  <div className="pricing-card__price">
                    {item.price} <span>som</span>
                  </div>
                  <div className="pricing-card__button">
                    <button className="button__default">Call Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
