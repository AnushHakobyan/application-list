/* eslint-disable import/no-anonymous-default-export */
import { EURO_TO_CENTS } from './utils/constants';
import { mockedData, mockedCategories } from './utils/mockedData';

const mockApiCall = (mockedData) => new Promise(function(resolve) {
  setTimeout(() => resolve(mockedData), 1000);
});

const processCategories = (categories) => categories.sort();

const processApp = ({ subscriptions, ...app }) => {
  const processedSubscriptions = subscriptions.map(({ name, price }) => ({
    name,
    price: price === 0 ? 0 : (price / EURO_TO_CENTS).toFixed(2),
  }));
  const orderWeight = subscriptions.reduce((weight, { price }) => {
    weight = weight + Number(price);
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

const loadApps = async () => {
  const appsResponse = await mockApiCall(mockedData);
  return processApps(appsResponse);
};

const loadCategories = async () => {
  const categoriesResponse = await mockApiCall(mockedCategories);
  return processCategories(categoriesResponse);
}

export default {
  loadApps,
  loadCategories,
}