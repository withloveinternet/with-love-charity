import { createStyles } from '@material-ui/core/styles'

const style = (theme) =>
  createStyles({
    workItem: {
      boxShadow: '0 22px 57px 0 rgba(79, 89, 138, 0.16)',
      '& img': {
        width: '100%',
      },
      '& a': {
        textDecoration: 'none'
      },
      '& .featureWorkItemData': {
        padding: theme.spacing(2.5, 3.5, 3.5, 3.5),
        [theme.breakpoints.down('xs')]: {
          padding: theme.spacing(2),
        },
      },
      '& .featuredProjectTitle': {
        fontFamily: 'Raleway',
        fontSize: 21,
        color: '#242440',
        marginBottom: theme.spacing(1),
        fontWeight: 700,
      },
      '& .projectCategoryTitle': {
        fontFamily: 'Raleway',
        fontSize: 12,
        color: '#242440',
      },
      '& .button': {
        marginTop: 15
      }
    },
  })

export default style
