import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-825R9NKGQD');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logFilterChange = (filterName: string, filterValue: string) => {
  ReactGA.event({
    category: 'Filter Change',
    action: `Changed ${filterName} to ${filterValue}`,
  });
};
