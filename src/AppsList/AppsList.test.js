import AppsList from './AppsList';
import Loader from "../Loader";
import { List } from '../List';

describe('AppsList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AppsList
        loading={true}
        apps={[]}
        page={1}
        setPage={jest.fn()}
    />);
  });
  it('Should render Loading if loading prop is passed true', () => {
    expect(wrapper.find(Loader).exists()).toBe(true);
    expect(wrapper.find(List).exists()).toBe(false);
  }),
  it('Should render the list if loading prop is passed false', () => {
    wrapper.setProps({ loading: false })
    expect(wrapper.find(List).exists()).toBe(true);
    expect(wrapper.find(Loader).exists()).toBe(false);
  })
})