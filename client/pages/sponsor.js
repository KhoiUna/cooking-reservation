import SponsorImg from "../components/SponsorImg";
import Layout from "../containers/layout";
import sponsorStyles from "../styles/sponsor.module.css";

export default function Sponsor({}) {
  const sponsorArray = [
    {
      imgSrc: "/img/ken.jpg",
      instaUsername: "@kentaro1575",
      instaLink: "https://www.instagram.com/kentaro1575/",
    },
  ];

  return (
    <Layout componentName="Sponsor">
      <h1 className={sponsorStyles.sponsor_title}>
        Thanks to our sponsorships!
        <div style={{ margin: "0.5rem 0" }}>
          Check out their Instagram page!
        </div>
      </h1>

      <div className={sponsorStyles.sponsor_flex}>
        {sponsorArray.map((item, index) => (
          <SponsorImg
            key={index}
            imgSrc={item.imgSrc}
            instaUsername={item.instaUsername}
            instaLink={item.instaLink}
          />
        ))}
      </div>
    </Layout>
  );
}
