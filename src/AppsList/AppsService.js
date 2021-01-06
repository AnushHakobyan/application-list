import mockedApps from './mockedApps';

export default {
  getApps: () => {
    const appsResponse = new Promise(function(resolve) {
      setTimeout(() => resolve(mockedApps), 500);
    })
    return appsResponse;
  },
}