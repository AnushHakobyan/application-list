import waitForExpect from 'wait-for-expect';
import CategoriesSidebar from './CategoriesSidebar';
import AppsService from '../AppsService';

const categoriesMockedResponse = ['category 1', 'category 2', 'category 3'];

describe('CategoriesSidebar', () => {
  let useEffect;
  let mockLoadCategories;
  let wrapper;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  }

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockLoadCategories = jest.spyOn(AppsService, 'loadCategories');
    mockLoadCategories.mockResolvedValue(categoriesMockedResponse);
    mockUseEffect();
    mockUseEffect();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show categories list when loaded and \'Show All\' should be selected', async () => {
    const wrapper = shallow(<CategoriesSidebar onClickHandler={jest.fn()} selectedCategory="" />);
    expect(wrapper.find('.nav-menu li').length).toBe(1);
    await waitForExpect(() => {
      expect(mockLoadCategories).toHaveBeenCalled();
    });
    expect(wrapper.find('.nav-menu li').length).toBe(4);
    expect(wrapper.find('.nav-menu li:first-child').text()).toBe('Show All');
    expect(wrapper.find('.nav-menu li:first-child').hasClass('active')).toBe(true);
  })
})