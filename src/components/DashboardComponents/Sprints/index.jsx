import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

import { getAllSprints, getVelocity } from 'http/getStatistic';
import Button from 'components/common/Button';

import * as Style from './styled';

const Sprints = () => {
  const [sprints, setSprints] = useState([]);
  const [sprintVelocity, setSprintVelocity] = useState({});
  const [loading, setLoading] = useState({});

  const handleClick = async (id) => {
    try {
      setLoading((oldState) => ({ ...oldState, [id]: true }));
      const { data } = await getVelocity(id);
      setSprintVelocity((oldState) => ({
        ...oldState, [id]: data,
      }));
      setLoading((oldState) => ({ ...oldState, [id]: false }));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getSprintsAsync = async () => {
      try {
        const { data } = await getAllSprints();
        const sprintsId = data.reduce((acc, { id }) => ({
          ...acc,
          [id]: null,
        }), {});
        const initialStateLoading = data.reduce((acc, { id }) => ({
          ...acc,
          [id]: false,
        }), {});
        setSprintVelocity(sprintsId);
        setSprints(data);
        setLoading(initialStateLoading);
      } catch (err) {
        console.error(err);
      }
    };
    getSprintsAsync();
  }, []);

  return (
    <Style.Wrapper>
      <Style.H2>Sprints</Style.H2>
      <Style.WrapperAllSprint>
        {sprints.map(({
          id, name, createdOn, projectName, status,
        }) => (
          <Style.WrapperSprint key={id}>
            <Style.WrapperInfo>
              <h4>{`Id: ${id}`}</h4>
              <h4>{`Sprint name: ${name}`}</h4>
              <h5>{`Project name: ${projectName}`}</h5>
              <p>{`Status: ${status}`}</p>
              <Style.Span>{`Created: ${formatDistanceToNow(Date.parse(createdOn))} ago`}</Style.Span>
            </Style.WrapperInfo>
            <Style.WrapperStatistic>
              {sprintVelocity[id] && (
                <Style.Paragraph>{`Sprint Velocity: ${sprintVelocity[id].velocity}`}</Style.Paragraph>
              )}
              <Style.WrapperButton>
                <Button onClick={() => handleClick(id)} type="button">{loading[id] ? 'Loading...' : 'Velocity'}</Button>
              </Style.WrapperButton>
            </Style.WrapperStatistic>
          </Style.WrapperSprint>
        ))}
      </Style.WrapperAllSprint>
    </Style.Wrapper>
  );
};

export default Sprints;
