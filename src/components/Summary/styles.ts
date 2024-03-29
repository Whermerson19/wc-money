import styled from "styled-components";

interface ICardProps {
  isTotal?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const Card = styled.div<ICardProps>`
  background: ${props => props.isTotal ? 'var(--green)' : 'var(--shape)'};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  color: ${props => props.isTotal ? '#fff' : 'var(--text-title)'};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;
