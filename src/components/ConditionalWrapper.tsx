import type { ReactElement, ReactNode } from "react";

interface ConditionalWrapperProps {
  condition: boolean;
  children: ReactElement | ReactNode;
  wrapper: (c: ReactElement | ReactNode) => ReactElement | ReactNode;
}

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
