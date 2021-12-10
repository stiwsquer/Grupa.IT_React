import { styled } from '@mui/material/styles';

export const LayoutRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  color: '#1563BC',
  backgroundSize: 'cover',
  objectFit: 'cover',
});

export const Quote = styled('div')({
  position: 'relative',
  minHeight: '20vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem',
  // eslint-disable-next-line no-useless-computed-key
  ['@media (max-width:580px)']: {
    padding: '1rem',
  },
});

export const Options = styled('div')({
  minHeight: '10vh',
});
