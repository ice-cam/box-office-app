const Details = props => {
  const { status, perimered, network } = props;

  return (
    <div>
      <p>Status: {status}</p>
      <p>
        Perimered={perimered} {!!network && `on ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
