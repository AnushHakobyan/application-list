import AppDetailsFooter from './AppDetailsFooter';

const subscriptions = [
  { name: 'trial', price: 0 },
  { name: 'starter', price: 100 },
  { name: 'advanced', price: 200 },
]

describe ('AppDetailsFooter', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AppDetailsFooter subscriptions={subscriptions} />
    );
  }),
  it ('should render subscriptions correctly', () => {
    expect(wrapper).toMatchSnapshot();
  }),
  it ('should render \'free\' if price is 0 ', () => {
    expect(wrapper.find('[data-testid="trial"] h3').text()).toEqual('free');
  })
})