import PropTypes from 'prop-types';

export const subscriptionShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

export const appTypeObject = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  subscriptions: PropTypes.arrayOf(subscriptionShape).isRequired,
};

export const appShape = PropTypes.shape(appTypeObject);
