import waitForExpect from 'wait-for-expect';
import App from './App';
import AppsService from './AppsService';
import AppsList from './AppsList';


jest.mock('./AppsList', () => 'AppsList');

const appsMockedResponse = [
  { id: '1', },
  { id: '2', }
];

describe('App', () => {
  let useEffect;
  let mockLoadApps;
  let wrapper;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  }

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockLoadApps = jest.spyOn(AppsService, 'loadApps');
    mockLoadApps.mockResolvedValue(appsMockedResponse);
    mockUseEffect();
    mockUseEffect();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('load and render apps list correctly', async () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AppsList).prop('loading')).toBe(true);
    await waitForExpect(() => {
      expect(mockLoadApps).toHaveBeenCalled();
    });
    expect(wrapper.find(AppsList).prop('loading')).toBe(false);
    expect(wrapper.find(AppsList).prop('apps')).toEqual([
      { id: '1', },
      { id: '2', }
    ]);
  })
});