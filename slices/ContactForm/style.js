const styles = (theme) => ({
  contactForm: {
    marginBottom: 100,
    '& .FormCard': {
      height: 724,
      padding: theme.spacing(0, 6, 0, 6),
      borderRadius: 6,
      boxShadow: '0 23px 42px 0 rgba(106, 118, 154, 0.15)',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 2),
        height: 'auto',
      },
      '& .formTitle': {
        color: '#4c4c78',
        textAlign: 'center',
        marginBottom: theme.spacing(5),
      },
      '& .inputTextArea': {
        borderRadius: 6,
        backgroundColor: '#ecf1f2',
        width: '100%',
        '& fieldset': {
          border: 0,
        },
        '& textarea': {
          fontSize: 12,
          fontWeight: 500,
          color: '#89899d',
        },
      },
      '& .input': {
        borderRadius: 6,
        backgroundColor: '#ecf1f2',
        marginBottom: theme.spacing(2.5),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: 46,
        '& input': {
          fontSize: 12,
          fontWeight: 500,
          color: '#89899d',
        },
        '& fieldset': {
          border: 0,
        },
        '& svg': {
          color: '#242440',
          backgroundColor: '#fff',
        },
      },
      '& .formtnc p': {
        margin: 0,
        fontSize: 14,
        fontWeight: 500,
        color: '#4c4c78',
        lineHeight: 1.71,
        textAlign: 'center',
        fontFamily: 'Raleway,sans-serif',
      },
      '& .sendBtn': {
        width: 350,
        margin: '0 auto',
        marginTop: theme.spacing(3.5),
        marginBottom: theme.spacing(3.5),
        [theme.breakpoints.down('500')]: {
          width: '100%',
        },
      },
    },
    '& .branchCard': {
      height: 724,
      borderRadius: 6,
      boxShadow: '0 23px 42px 0 rgba(106, 118, 154, 0.15)',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
      },
      '& .bannerImg': {
        height: 350,
        width: '100%',
      },
      '& .branchCardData': {
        padding: theme.spacing(3.5, 3.5),
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(2),
        },
        '& .country': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          '& img': {
            height: 33,
          },
          '& .countryName': {
            color: '#4c4c78',
            fontWeight: 500,
            marginLeft: theme.spacing(2),
          },
        },
        '& .infoTitle': {
          color: '#4c4c78',
          margin: theme.spacing(2, 0),
        },
        '& .infoData p': {
          fontSize: '0.875rem',
          color: '#4c4c78',
          fontWeight: 500,
          margin: theme.spacing(0.5, 0),
          fontFamily: 'Raleway,sans-serif',
        },
      },
    },
  },
})
export default styles
