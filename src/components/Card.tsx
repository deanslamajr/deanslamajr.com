import styled from 'styled-components';

import { breakpoints } from './layouts';
import { card, shadow } from './layouts';

export const OuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  z-index: ${props => props.theme.zIndex.lowest};
  ${breakpoints.tabletMax`
    margin: 3rem .75rem;
  `}
`;

export const CardLink = styled.a`
  width: 100%;
  color: inherit;
  text-decoration: none;
  ${breakpoints.phoneMax`
    margin: 0;
  `}
`;

export const ShadowCard = styled.div`
  ${card()}
  ${shadow()}
`;

export const Title = styled.div`
  text-align: center;
  font-family: ${props => props.theme.fonts};
  font-size: 1.75rem;
  ${breakpoints.phoneMax`
    font-size: 1.5rem;
  `}
`;

export const Details = styled.div`
  color: ${props => props.theme.colors.red};
  font-family: ${props => props.theme.fonts};
  margin: 1rem 0;
  ${breakpoints.phoneMax`
    margin: .75rem 0;
  `}
`;

export const Quote = styled.div`
  font-family: ${props => props.theme.fonts};
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  ${breakpoints.phoneMax`
    text-align: justify;
  `}
`;

export interface CardProps {
  href: string;
  key: string;
  quote: string;
  quoteHasHtml?: boolean;
  title: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  href,
  quote,
  quoteHasHtml,
  title,
}) => (
  <OuterContainer>
    <CardLink href={href} target="_blank">
      <ShadowCard>
        <Title>{title}</Title>
        <Details>{children}</Details>
        {quoteHasHtml ? (
          <Quote dangerouslySetInnerHTML={{ __html: quote }} />
        ) : (
          <Quote>{quote}</Quote>
        )}
      </ShadowCard>
    </CardLink>
  </OuterContainer>
);
