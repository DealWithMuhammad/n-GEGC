"use client";
import { Container, Grid } from "theme-ui";
import SectionHeader from "./section-header";
import TeamCard from "./team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { ThemeUIProvider } from "theme-ui";
import theme from "../theme/index";

import Member2 from "../assets/team/member2.png";
import Member3 from "../assets/team/member-3.png";
import Member4 from "../assets/team/member-4.png";
import Member5 from "../assets/team/member-5.png";
import Member6 from "../assets/team/member-6.png";

const data = [
  {
    id: 1,
    imgSrc: "./member-1.png",
    altText: "Saimon Harmer",
    title: "Saimon Harmer",
    designation: "CEO and Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: "./member-2.png",
    altText: "Aaron Nunez",
    title: "Aaron Nunez",
    designation: "Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: "./member-3.png",
    altText: "Aaron Nunez",
    title: "Aaron Nunez",
    designation: "Worker",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: "./member-4.png",
    altText: "Lina Jutila",
    title: "Lina Jutila",
    designation: "Employee",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: "./member-5.png",
    altText: "Saimon Harmer",
    title: "Saimon Harmer",
    designation: "CEO and Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: "./member-6.png",
    altText: "Aaron Nunez",
    title: "Aaron Nunez",
    designation: "Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <ThemeUIProvider theme={theme}>
      <section>
        <Container>
          <SectionHeader
            slogan="Our Team"
            title="The most qualified and talented individuals"
          />

          <Grid sx={styles.grid}>
            {data.map((item) => (
              <TeamCard
                key={item.id}
                src={item.imgSrc}
                altText={item.altText}
                title={item.title}
                designation={item.designation}
                social={item.socialProfile}
              />
            ))}
          </Grid>
        </Container>
      </section>
    </ThemeUIProvider>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
