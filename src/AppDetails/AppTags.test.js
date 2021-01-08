import AppTags from './AppTags';

describe('AppTags Component', () => {
  it ('should render tags and slashes between them', () => {
    const wrapper = shallow(<AppTags tags={['tag 1', 'tag 2', 'tag 3']} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('[data-testid="separator"]')).toHaveLength(2);
  }),
  it ('should not render a slash at the end of or at the beginning of tags', () => {
    const wrapper = shallow(<AppTags tags={['single tag']} />);
    expect(wrapper.find('[data-testid="separator"]')).toHaveLength(0);
  })
});
