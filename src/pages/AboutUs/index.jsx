import { StyledAboutUs } from "./style";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigateTo = useNavigate({ replace: true });

  return (
    <StyledAboutUs>
      <div className="pageOne">
        <p
          className="soulful"
          style={{ cursor: "pointer" }}
          onClick={() => navigateTo("/", { replace: true })}
        >
          SOULFUL
        </p>
        <div className="triangle" />
        <h1>
          ABOUT <br />
          <span>US</span>
        </h1>
        <p>
          About <i>Soulful Lab</i> - <a href="">Passport Digital NFT</a>
        </p>
        <p>
          At <i>Soulful Lab</i> we are passionate about exploring the world and
          embracing the diverse cultures it has to offer. We have created a
          unique project that combines our love for travel, technology, and
          blockchain to provide a meaningful experience for avid adventurers and
          wanderers alike.
        </p>
        <p>
          <a href="">Passport Digital </a>is an innovative NFT (Non-Fungible
          Token) platform that enables travellers to collect digital stamps or{" "}
          <span>Memories</span> as they visit various locations around the
          globe. These <span>Memories</span> serve as a certification and
          authentication of their travel experiences, providing a tangible
          representation of their journey.
        </p>
        <p>
          Our platform utilizes blockchain technology, ensuring the security,
          transparency, and immutability of each <span>Memory</span> collected.
          By leveraging the power of blockchain, we aim to revolutionise the way
          travellers are recognised and rewarded for their passion for
          exploration.
        </p>
      </div>

      <div className="pageTwo">
        <div className="triangleTwo" />
        <p>
          The primary objective of <i>Soulful Lab</i> -{" "}
          <a href="">Passport Digital NFT</a> is to empower travellers by
          granting them exclusive benefits and privileges based on their
          accumulated <span>Memories</span>. As individuals accumulate a
          significant number of <span>Memories</span>, they become eligible for
          a range of rewards, including access to unique experiences, discounts
          on accommodations, special dealson transportation, and more.
        </p>
        <p>
          By growing a community of enthusiastic <span>Memories</span> holders,
          <i>Soulful Lab</i> - <a href="">Passport Digital NFT</a> fosters a
          sense of belonging and connection among like-minded travellers.
          Through our platform, travellers can share their stories, discover new
          destinations, and inspire others to embark on their own journeys.
        </p>
        <p>
          We believe that travel is an enriching experience that broadens
          horizons, promotes cultural understanding, and encourages personal
          growth. <i>Soulful Lab</i> - <a href="">Passport Digital NFT</a> aims
          to providing travellers with a valuable tool to document and
          authenticate their global adventures.
        </p>
        <p>
          Join us at <i>Soulful Lab</i> - Passport Digital NFT and embark on a
          transformative journey of discovery, authenticity, and the rewards
          that come with being part of a vibrant community of passionate
          travellers. Together, let&#39;s unlock the world and embrace the joy
          of collecting Memories.
        </p>
      </div>
    </StyledAboutUs>
  );
}

export default AboutUs;
