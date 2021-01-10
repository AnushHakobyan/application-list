import AppsService from './AppsService';

jest.mock('./utils/mockedData', () => ({
  mockedData: [{
    id: '1',
    name: 'Voice Report',
    description: 'Calls reporting and analytics of your calls.',
    categories: ['Voice Analytics', 'Reporting', 'Optimization'],
    subscriptions: [
      {
        name: 'Trial',
        price: 1000
      },
      {
        name: 'Professional',
        price: 3500
      }
    ]
  },
  {
    id: '2',
    name: 'Video Contacts',
    description: 'Communicate with your customers and agents using video calls.',
    categories: ['Productivity'],
    subscriptions: [
      {
        name: 'Trial',
        price: 0
      },
      {
        name: 'Professional',
        price: 2500
      }
    ]
  }],
  mockedCategories: [
    'abcd', 'zyx', 'hgy', 'hga', 'myyn',
  ]
}))


// In a real life application loadApps and loadCategories would be mocked as well.
// But in our example they are already mocked, so async call is already simulated in the AppService module.
describe ('AppsService module', () => {
  describe ('loadApps simulates api call to get apps list', () => {
    let response;
    beforeEach(async () => {
      response = await AppsService.loadApps();
    })
    it ('load app list', () => {
      expect(response.length).toBe(2);
    }),
    it ('response body should be processed correctly', () => {
      expect(response[0].id).toBe('2');
      expect(response[1].orderWeight).toBe(4500);
      expect(response[1].subscriptions[1].price).toBe('35.00');
    })
  })
  describe('loadCategories simulates api call to get categories list', () => {
    it ('load category list sorted correctly', async () => {
      const response = await AppsService.loadCategories();
      expect(response).toEqual(['abcd', 'hga','hgy', 'myyn', 'zyx']);
    })
  })
});