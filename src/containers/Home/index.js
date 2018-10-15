import React from "react";
import PageHero from "components/PageHero";
import CatchPhrase from "components/CatchPhrase";

import { COMPANY_NAME } from "const";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <PageHero title="Pro Asset Investments" />
        <CatchPhrase text="Some catchphrase" />
        <div>
          <p>Let your savings work for you !</p>
          <div>
            <h2>About Us</h2>
            <p>
              At {COMPANY_NAME}, we believe every under-utilised home can be
              converted into a valuable asset.
            </p>
            <p>
              We specialise in acquiring smelly houses and houses of multiple
              occupations and valorize them into quality and functional houses
              for the community.
            </p>
            <p>
              As investing in property is passive incoe-making and
              time-consuming, we also offer to investors to growth their wealth
              from secure property investments through funding.
            </p>
            <p>
              From short-term to long-term journey, we give you the opportunity
              to take control of your financial future because everything we do
              is driven by our purpose to create quality homes for quality
              assets.
            </p>
            <img src="" alt="about-us" />
          </div>
          <div>
            <h2>Our values</h2>
            <div>
              <h3>Pro-fessionalism</h3>
              <div>
                <div>
                  <p>
                    As a professional peroparty investment company operating in
                    the UK, we care about quality.
                  </p>
                  <p>
                    Our company works closely with highly-experienced team
                    intergrated into the English real-estate market for more
                    than 10 years.
                  </p>
                </div>
                <img src="" alt="professionalism" />
              </div>
            </div>
            <div>
              <h3>Pro-fitability</h3>
              <div>
                <div>
                  <p>
                    We firstly focus on providing quality houses in areas with
                    strong rental demand and a lack of supply for the community.
                  </p>
                  <p>
                    We know that well-researched investments provide you with
                    the safety and protection you need to reach your financial
                    goals.
                  </p>
                </div>
                <img src="" alt="profitability" />
              </div>
            </div>
            <div>
              <h3>Pro-tection</h3>
              <div>
                <div>
                  <p>
                    For every property investment, we make a deap due diligence
                    to ensure quality standards.
                  </p>
                  <p>
                    Each project is followed and secured by a solicitor. All our
                    partnerships are authorized fully regulated by their
                    respective third-party regulatory body to exercise.
                  </p>
                </div>
                <img src="" alt="protection" />
              </div>
            </div>
          </div>
          <div>
            <h2>Why Investing in the UK ?</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
