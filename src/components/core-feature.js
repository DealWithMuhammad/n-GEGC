"use client";
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "./text-feature";

import { ThemeUIProvider } from "theme-ui";
import theme from "../theme/index";

import FeatureThumb from "../assets/core-feature.png";
import shapePattern from "../assets/shape-pattern2.png";
import SectionHeader from "./section-header";

const data = {
  subTitle: "Intro",
  title: "Introduction to",
  description:
    "GEGC: Your hub for healing, growth, and empowerment. Join our vibrant community fostering resilience, personal development, and genuine connections for refugee and local Malaysian youths alike.",
  btnName: "Get Started",
  btnURL: "#",
};

export default function CoreFeature() {
  return (
    <ThemeUIProvider theme={theme}>
      <SectionHeader
        slogan="Who are we?"
        title="Goal of Girls' Sports Galaxy Club"
      />
      <section sx={{ variant: "section.coreFeature" }}>
        <Container sx={styles.containerBox}>
          <Box sx={styles.contentBox}>
            <TextFeature
              subTitle={data.subTitle}
              title={
                <>
                  {data.title}{" "}
                  <span className="font-bold  md:text-4xl bg-gradient-to-r from-[#9B5DE5] via-[#3ABAC6] to-[#9B5DE5] bg-clip-text text-transparent">
                    GEGC
                  </span>
                </>
              }
              description={data.description}
              btnName={data.btnName}
              btnURL={data.btnURL}
            />
          </Box>
          <Box sx={styles.thumbnail}>
            <Image src={"./about.jpg"} alt="Thumbnail" />
            <Box sx={styles.shapeBox}></Box>
          </Box>
        </Container>
      </section>
    </ThemeUIProvider>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
