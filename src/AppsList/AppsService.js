import { mockedApps, mockedCategories } from './mockedApps';

const CENTS_FOR_EURO = 100;

const mockApiCall = (mockedData) => new Promise(function(resolve) {
  setTimeout(() => resolve(mockedData), 500);
});

const processCategories = (categories) => categories.sort();

const processApp = ({ subscriptions, ...app }) => {
  const processedSubscriptions = subscriptions.map(({ name, price }) => ({
    name,
    price: (price / CENTS_FOR_EURO).toFixed(2),
  }));
  const orderWeight = subscriptions.reduce((weight, { price }) => {
    weight = weight + price;
    return weight;
  }, 0);
  return {
    ...app,
    subscriptions: processedSubscriptions,
    orderWeight,
  }
}

const appsComparator = (actual, next) => {
  debugger;
  return actual.orderWeight - next.orderWeight;
}

const processApps = (apps) => {
  const processedApps = apps.map(processApp);
  return processedApps.sort(appsComparator);
}

export default {
  loadApps: async () => {
    const appsResponse = await mockApiCall(mockedApps);
    return processApps(appsResponse);
  },
  loadCategories: async () => {
    const categoriesResponse = await mockApiCall(mockedCategories);
    return processCategories(categoriesResponse);
  }
}