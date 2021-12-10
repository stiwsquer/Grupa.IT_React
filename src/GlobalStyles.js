import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
      },
      body: {
        backgroundColor: '#f4f6f8',
        height: '100%',
        width: '100%',
      },

      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  }),
);

function GlobalStyles() {
  useStyles();
  return null;
}

export default GlobalStyles;
