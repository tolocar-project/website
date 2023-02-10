const ConditionalLinkWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default ConditionalLinkWrapper;
