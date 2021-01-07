import { EURO_TO_CENTS } from '../utils/constants';
import { mockedData, mockedCategories } from '../utils/mockedData';

const mockApiCall = (mockedData) => new Promise(function(resolve) {
  setTimeout(() => resolve(mockedData), 500);
});

const processCategories = (categories) => categories.sort();

const processApp = ({ subscriptions, ...app }) => {
  const processedSubscriptions = subscriptions.map(({ name, price }) => ({
    name,
    price: Number((price / EURO_TO_CENTS).toFixed(2)),
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

const appsComparator = (actual, next) => actual.orderWeight - next.orderWeight;

const processApps = (apps) => {
  const processedApps = apps.map(processApp);
  return processedApps.sort(appsComparator);
}

export default {
  loadApps: async () => {
    const appsResponse = await mockApiCall(mockedData);
    return processApps(appsResponse);
  },
  loadCategories: async () => {
    const categoriesResponse = await mockApiCall(mockedCategories);
    return processCategories(categoriesResponse);
  }
}