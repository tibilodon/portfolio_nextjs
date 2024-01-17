"use client";
type Props = { children: React.ReactNode };

const Wrap: React.FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Wrap;
