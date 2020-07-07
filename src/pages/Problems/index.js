import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';
import HeaderNav from '~/components/HeaderNavigation';

import {
  Container,
  Content,
  Title,
  ProblemsList,
  ProblemCard,
  ProblemText,
  DateText,
  NoProblem,
  NoProblemContainer,
} from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const route = useRoute();
  const { deliveryId } = route.params;

  function formattedProblems(fetchedProblems) {
    const formatted = fetchedProblems.map((problem) => ({
      ...problem,
      formattedDate: format(parseISO(problem.createdAt), 'MMMM dd, yyyy'),
    }));
    return formatted;
  }

  function formatDeliveryId(id) {
    const formatted = id < 10 ? `0${id}` : id;
    return formatted;
  }

  useEffect(() => {
    async function fetchProblems() {
      try {
        const { data } = await api.get(`/delivery/${deliveryId}/problems`);
        setProblems(formattedProblems(data));
      } catch (err) {
        Alert.alert(err.response.data.error);
      }
    }
    fetchProblems();
  }, []);

  return (
    <Container>
      <HeaderNav title="View problems" />
      <Content>
        <Title>{`Delivery ${formatDeliveryId(deliveryId)}`}</Title>

        {problems.length === 0 ? (
          <NoProblemContainer>
            <NoProblem>No problem for this delivery</NoProblem>
          </NoProblemContainer>
        ) : (
          <ProblemsList>
            {problems.map((problem) => (
              <ProblemCard key={problem.createdAt} style={{ elevation: 3 }}>
                <ProblemText>{problem.description}</ProblemText>
                <DateText>{problem.formattedDate}</DateText>
              </ProblemCard>
            ))}
          </ProblemsList>
        )}
      </Content>
    </Container>
  );
}

Problems.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
