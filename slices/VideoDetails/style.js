const styles = (theme) => ({
  workDetailsVideo: {
    clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0% 100%)",
    position: "relative",
    backgroundColor: "#397DB7",
    backgroundRepeat: "no-repeat",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(9),
      backgroundSize: "200% 70%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(8),
    },
    "& .thumbnailWrapper": {
      "& .playBtn": {
        height: 69,
        width: 105,
        backgroundImage: `url('/playBtnBg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: 'absolute',
        borderRadius:8,
        boxShadow: "0px 2px 6px 0px #1f1f1f",
        top: '55%',
        left: '50%',
        right: '50%',
        cursor:'pointer',
        transform: 'translateY(-50%) translateX(-50%)',
        [theme.breakpoints.down("844")]: {
          top: '60%',
        },
        [theme.breakpoints.down("600")]: {
          top: '60%',
          height: 35,
        width: 55,
        borderRadius:8,
        },
        [theme.breakpoints.down("374")]: {
          top: '63%',
        },
      },
    },
    "&::after": {
      clipPath: "polygon(0 15%, 100% 0, 100% 90%, 0% 100%)",
      background:
        "linear-gradient(90deg, rgba(140,194,75,1) 70%, rgba(74,146,207,1) 30%)",
      content: '""',
      position: "absolute",
      left: 0,
      top: "-89.5%",
      right: 0,
      height: "100%",
      display: "block",
      zIndex: 9,
    },
    "& .container ": {
      height: "100%",
    },
    "& .imgBg": {
      backgroundImage: `url('/videoBg.png')`,
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      maxWidth: 970,
      padding: theme.spacing(2.5, 2.5),
      margin: theme.spacing(8.5, 0, 8.5, 0),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(2, 0),
      },
    },
    "& img": {
      width: "100%",
    },
  },
});
export default styles;
