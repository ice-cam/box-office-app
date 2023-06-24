//import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

const Show = () => {
  const { showId } = useParams();
  //const { showData, showError } = useShowById(showId);

  const { data: showData, error: showError } = useQuery(['show', showId], () =>
    getShowById(showId)
  );

  if (showError) {
    return <div>We have an error : ${showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data : ${showData.name}</div>;
  }

  return <div>Data is loading </div>;
};

export default Show;
