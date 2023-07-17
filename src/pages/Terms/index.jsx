import { StyledTerms } from "./style";
import { useNavigate } from "react-router-dom";

function Terms() {
  const navigateTo = useNavigate({ replace: true });

  return (
    <StyledTerms>
      <div className="pageOne">
        <div className="triangle" />
        <p
          className="soulful"
          style={{ cursor: "pointer" }}
          onClick={() => navigateTo("/", { replace: true })}
        >
          SOULFUL
        </p>
        <h1>
          TERMS OF <br />
          <span>USE</span>
        </h1>
        <p>
          Terms and Conditions - <i>Soulful Lab.</i>
        </p>
        <p>
          These are the terms and conditions for the <i>Soulful Lab.</i> -{" "}
          <a href="">Digital Passport NFT.</a>
        </p>
        <p>
          By participating in this project and using the site, you agree to the
          following terms:
        </p>
        <ol>
          <li>
            <b>1. Creation and Acquisition of NFTs:</b>
          </li>
          <ol>
            <li>
              a. Upon acquiring a <a href="">Digital Passport NFT.</a>,
              represented by a digital collectible, you receive a non-exclusive,
              transferable license for personal, non-commercial use of the{" "}
              <a href="">Digital Passport NFT.</a>.
            </li>
            <li>
              b. The <a href="">Digital Passport NFT.</a> will be provided upon
              payment of €2.99, granting access to the project&#39;s benefits
              and advantages.
            </li>
            <li>
              c. The <a href="">Digital Passport NFT.</a> may not be duplicated,
              copied, or reproduced in any form by the purchaser.
            </li>
          </ol>
        </ol>
      </div>

      <div className="pageTwo">
        <ol>
          <li>
            <b>2. Benefits and Advantages (to be determined):</b>
          </li>
          <ol>
            <li>
              a. Holders of the <a href="">Digital Passport NFT</a> are entitled
              to additional benefits, such as exclusive content access, special
              offers, discounts from partner establishments, and participation
              in exclusive tourism-related events.
            </li>
            <li>
              b. <i>Soulful Lab</i> commits to finding partners to provide
              discounts and exclusive advantages for holders of the digital
              collectibles. These benefits may include experiences, products,
              and services related to travel and memories.
            </li>
            <li>
              c. Additionally, holders can collect <span>Memories</span> in
              their passport by recording the places they have visited, adding
              value and personalization to their Wallets .
            </li>
          </ol>
        </ol>
        <ol>
          <li>
            <b>3. Proper Use and Restrictions:</b>
          </li>
          <ol>
            <li>
              a. The <a href="">Digital Passport NFT</a> holder is responsible
              for maintaining the security of their account and protecting it
              against unauthorized access.
            </li>
            <li>
              b. <i>Soulful Lab</i> is not liable for any loss, damage, or theft
              of the acquired <a href="">Digital Passport NFT</a>.
            </li>
            <li>
              c. <i>Soulful Lab</i> does not control transactions on secondary
              markets and is not responsible for any issues or disputes arising
              from these transactions..
            </li>
          </ol>
        </ol>
        <ol>
          <li>
            <b>4. Privacy and Data Protection:</b>
          </li>
          <ol>
            <li>
              a. By participating in the <a href="">Digital Passport NFT</a>,
              you agree that your personal information provided during the
              acquisition process may be collected and used for project-related
              purposes.
            </li>
            <li>
              b. <i>Soulful Lab</i> will take appropriate measures to protect
              your personal information but cannot guarantee its complete
              security.
            </li>
          </ol>
        </ol>
      </div>

      <div className="pageThree">
        <div className="triangleTwo" />
        <ol>
          <li>
            <b>5. Changes to the Terms and Conditions:</b>
          </li>
          <ol>
            <li>
              a. <i>Soulful Lab</i> reserves the right to modify these terms and
              conditions at any time. Any changes will be communicated to
              <a href="">Digital Passport NFT</a> holders through appropriate
              channels.
            </li>
          </ol>
        </ol>

        <ol>
          <li>
            <b>6. Instant Wallet Creation and Wallet Migration:</b>
          </li>
          <ol>
            <li>
              a. When acquiring the <a href="">Digital Passport NFT</a> through
              a Google account, an instant wallet will be created. If desired,
              the holder can later migrate to another web3 wallets.
            </li>
            <li>
              b. Individuals who acquire the <a href="">Digital Passport NFT</a>{" "}
              through their crypto wallet will have the collectibles directly
              deposited into their wallet.
            </li>
          </ol>
        </ol>

        <p>
          By proceeding with the acquisition of the{" "}
          <a href="">Digital Passport NFT</a>, you agree to comply with these
          terms and conditions. In case of violation,
          <i>Soulful Lab</i> reserves the right to take appropriate measures,
          including the termination of access and use rights to the Digital
          Passport NFT.
        </p>
      </div>
    </StyledTerms>
  );
}

export default Terms;
