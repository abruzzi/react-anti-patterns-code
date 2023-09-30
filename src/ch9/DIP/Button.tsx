const Button = ({ onClick: provided, name, ...rest }: ButtonProps) => {
  const onClick = (e) => {
    //emit an event to the analytic server
    return provided(e);
  };
  return <button onClick={onClick} {...rest} />;
};

export default Button;