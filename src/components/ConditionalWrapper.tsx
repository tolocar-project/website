import type { ReactElement, ReactNode } from "react";

interface Props {
  condition: boolean;
  children: ReactElement | ReactNode;
  wrapper: (c: ReactElement | ReactNode) => ReactElement | ReactNode;
}

const ConditionalWrapper: React.FC<Props> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
