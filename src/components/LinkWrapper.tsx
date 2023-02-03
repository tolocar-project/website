const LinkWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default LinkWrapper;
