import { mockedApps, mockedCategories } from './mockedApps';

const mockApiCall = (mockedData) => new Promise(function(resolve) {
  setTimeout(() => resolve(mockedData), 500);
});

export default {
  getApps: () => {
    const appsResponse = mockApiCall(mockedApps);
    return appsResponse;
  },
  getCategories: () => {
    const categoriesResponse = mockApiCall(mockedCategories);
    return categoriesResponse;
  }
}