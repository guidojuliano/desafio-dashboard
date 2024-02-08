import ReactGA from 'react-ga';

export const logPageView = (pageName: string) => {
  ReactGA.set({ page: pageName });
  ReactGA.pageview(pageName);
};

export const logFilterChange = (filterName: string, filterValue: string) => {
  ReactGA.event({
    category: 'Filter Change',
    action: `Changed ${filterName} to ${filterValue}`,
  });
};
