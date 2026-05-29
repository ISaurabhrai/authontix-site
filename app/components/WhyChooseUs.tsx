export default function WhyChooseUs() {

  return (

   <section
  id="why-us"
  className="why-section"
>

      {/* BACKGROUND VIDEO */}

      <video
        className="why-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/CIN3.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}

      <div className="why-overlay"></div>

      {/* CONTENT */}

      <div className="why-container">

        {/* LEFT SIDE */}

        <div className="why-left">

          <p className="why-mini-text">
            WHY CHOOSE US
          </p>

          <h2 className="why-heading">

            Enterprise Technology

            <span>
              Solutions
            </span>

            For Modern Businesses.

          </h2>

          <p className="why-description">

            Authentic Infosystem delivers enterprise grade
            laptops, desktops, networking infrastructure,
            CCTV surveillance systems, accessories,
            and complete IT procurement solutions
            for businesses, institutions, organizations,
            and individual customers across India.

          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="why-right">

          {/* CARD 1 */}

          <div className="why-flip-card">

            <div className="why-flip-inner">

              {/* FRONT */}

              <div
                className="why-card-front"
                style={{
                  backgroundImage:
                    "url('/Photos/1g.png')"
                }}
              >

                <div className="why-card-overlay"></div>

                <div className="why-card-content">

                  <h3>
                    PAN India Delivery
                  </h3>

                </div>

              </div>

              {/* BACK */}

              <div className="why-card-back">

                <h3>
                  Nationwide Logistics
                </h3>

                <p>
                  Reliable procurement and fast delivery
                  support for businesses, institutions,
                  enterprise clients, and organizations
                  across India.
                </p>

              </div>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="why-flip-card">

            <div className="why-flip-inner">

              <div
                className="why-card-front"
                style={{
                  backgroundImage:
                    "url('/Photos/2g.png')"
                }}
              >

                <div className="why-card-overlay"></div>

                <div className="why-card-content">

                  <h3>
                    B2B & B2C Solutions
                  </h3>

                </div>

              </div>

              <div className="why-card-back">

                <h3>
                  Technology Solutions
                </h3>

                <p>
                  Complete enterprise technology services
                  for startups, offices, retail businesses,
                  and modern digital workplaces.
                </p>

              </div>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="why-flip-card">

            <div className="why-flip-inner">

              <div
                className="why-card-front"
                style={{
                  backgroundImage:
                    "url('/Photos/3g.png')"
                }}
              >

                <div className="why-card-overlay"></div>

                <div className="why-card-content">

                  <h3>
                    Direct Procurement
                  </h3>

                </div>

              </div>

              <div className="why-card-back">

                <h3>
                  Better Pricing
                </h3>

                <p>
                  Direct sourcing partnerships with
                  globally trusted brands for competitive
                  pricing and enterprise procurement.
                </p>

              </div>

            </div>

          </div>

          {/* CARD 4 */}

          <div className="why-flip-card">

            <div className="why-flip-inner">

              <div
                className="why-card-front"
                style={{
                  backgroundImage:
                    "url('/Photos/4g.png')"
                }}
              >

                <div className="why-card-overlay"></div>

                <div className="why-card-content">

                  <h3>
                    Enterprise Assistance
                  </h3>

                </div>

              </div>

              <div className="why-card-back">

                <h3>
                  Dedicated Support
                </h3>

                <p>
                  Infrastructure consultation,
                  deployment guidance, and long term
                  enterprise technology assistance.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}