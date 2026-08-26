export const firmProfile = {
  cover: "/assets/profile/ProfileCover.PNG",
  pdf: "/assets/profile/QHM - Firm Profile.pdf",
  title: "Latest Firm Profile",
  cta: "Download Our Latest Firm Profile",
};

export const clientLogos = Array.from({ length: 25 }, (_, index) => index + 13)
  .filter((fileNumber) => fileNumber !== 18)
  .map((fileNumber) => {
    const extension = [14, 17, 26, 31, 35].includes(fileNumber) ? "jpg" : "png";

    return {
      src: `/assets/clientsLogo/${fileNumber}.${extension}`,
      alt: `QHM client logo ${fileNumber}`,
    };
  });
