const ShowCard = ({ name, image, id, summary }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default ShowCard;
