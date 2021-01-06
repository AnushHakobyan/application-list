import { mockedApps, mockedCategories } from './mockedApps';

const mockApiCall = (mockedData) => new Promise(function(resolve) {
  setTimeout(() => resolve(mockedData), 500);
});

const processCategories = (categories) => categories.sort();

export default {
  loadApps: async () => {
    const appsResponse = await mockApiCall(mockedApps);
    return appsResponse;
  },
  loadCategories: async () => {
    const categoriesResponse = await mockApiCall(mockedCategories);
    return processCategories(categoriesResponse);
  }
}