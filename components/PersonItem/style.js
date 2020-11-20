const styles = (theme) => ({
  speaker: {
    boxShadow: '0 22px 57px 0 rgba(37, 44, 80, 0.5)',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    '& img': {
      width: '100%',
    },
    '& .speakerInfo': {
      padding: theme.spacing(4),
      '& .tag': {
        display: 'inline-block',
        borderRadius: 2,
        backgroundColor: '#4a92cf',
        padding: theme.spacing(0.5),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        marginBottom: theme.spacing(2),
        fontSize: 10,
        color: '#ffffff',
        fontWeight: 700,
        textTransform: 'uppercase'
      },
      '& .name': {
        color: '#4c4c78',
        lineHeight: 1.19,
      },
      '& .title': {
        lineHeight: 1.67,
        color: '#4c4c78',
        fontWeight: 700,
        fontFamily: 'Raleway,sans-serif',
        fontSize: 14,
        marginTop: theme.spacing(2.5),
        display: 'block',
        minHeight: 46,
      },
      '& button': {
        width: '100%',
        marginTop: theme.spacing(2),
      },
    },
  },
})
export default styles
