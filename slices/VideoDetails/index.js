import React, {useState} from "react";
import PropTypes from "prop-types";
import { RichText } from "prismic-reactjs";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ButtonBase from "@material-ui/core/ButtonBase";
import { withStyles } from "@material-ui/core/styles";
import style from "./style";
import {
  structuredTextPropTypes,
  imagePropTypes,
} from "../../utils/prop-types";
import TitleSubtitle from "../../components/TitleSubtitle";
import ThumbnailVideo from "../../components/ThumbnailVideo";
import CustomLink from "../../components/CustomLink";
import VideoModal from "../../components/VideoModal";


const VideoDetails = ({ slice, classes }) => {
  const { primary } = slice;
  const [openModal, setOpenModal] = useState(false);

  const openVideoDialog = () => {
    setOpenModal(true);
  };

  const closeVideoDialog = () => {
    setOpenModal(false);
  };

  return (
    <div className={classes.workDetailsVideo}>
      <Container>
        <TitleSubtitle
          title={RichText.asText(primary.sectionTitle)}
          subtitle={RichText.asText(primary.sectionSubtitle)}
          showClass
        />
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="thumbnailWrapper">
            <ThumbnailVideo
              thumbnailVideoUrl={primary.thumbnail.url}
              thumbnailVideoAlt={primary.thumbnail.alt}
            />
            <ButtonBase
              // link={primary.ctaButtonLink}
              className="playBtn"
              onClick={openVideoDialog}
            >
              {/* <Button className="playBtn"/> */}
            </ButtonBase>
          </div>
          <CustomLink link={primary.ctaButtonLink}>
            <Button variant="contained" color="primary">
              {RichText.asText(primary.ctaButtonText)}
            </Button>
          </CustomLink>
        </Grid>
      </Container>
      <VideoModal
        open={openModal}
        handleClose={closeVideoDialog}
        video={primary.vimeoLink}
      />
    </div>
  );
};

VideoDetails.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      sectionTitle: structuredTextPropTypes,
      sectionSubtitle: structuredTextPropTypes,
      thumbnail: imagePropTypes,
      ctaButtonText: structuredTextPropTypes,
      ctaButtonLink: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(style)(VideoDetails);
