import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import loading from '../assets/loading.gif';

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SessionContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const SessionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SessionTitle = styled.h2`
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TimeButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const MoviePoster = styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
`;

const MovieTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

export default function SessionsPage() {
  const [sessions, setSessions] = useState(undefined);
  const { idFilme } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;

    axios.get(URL)
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [idFilme]);

  if (sessions === undefined) {
    return (
      <LoadingDiv>
        <img src={loading} alt="Loading..." />
      </LoadingDiv>
    );
  }

  return (
    <PageContainer>
      <h1>Select a Showtime</h1>
      {sessions.days.map(session => (
        <SessionContainer key={session.id}>
          <SessionHeader>
            <SessionTitle>{session.weekday} - {session.date}</SessionTitle>
            <FooterContainer>
              <MoviePoster src={sessions.posterURL} alt={`${sessions.title} poster`} />
              <MovieTitle>{sessions.title}</MovieTitle>
            </FooterContainer>
          </SessionHeader>
          <ButtonsContainer>
            {session.showtimes.map(time => (
              <TimeButton to={`/seats/${time.id}`} key={time.id} data-test="showtime">
                {time.name}
              </TimeButton>
            ))}
          </ButtonsContainer>
        </SessionContainer>
      ))}
    </PageContainer>
  );
}
