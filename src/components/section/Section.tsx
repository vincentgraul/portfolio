import React, { ReactElement } from "react";
import styled from "styled-components";
import Card, { Props as CardProps } from "../card/Card";

export enum Orientation {
  LEFT = "left",
  RIGHT = "right",
}

interface Props {
  card: CardProps;
  orientation?: Orientation;
  renderImage: () => ReactElement | null;
  className?: string;
}

export default function Section(props: Props): JSX.Element {
  const { card, orientation, renderImage, className } = props;

  return (
    <Container className={`${className}`} orientation={orientation}>
      {renderImage()}
      <SectionCard
        {...card}
        orientation={orientation}
        hasImage={renderImage() !== null}
      ></SectionCard>
    </Container>
  );
}

const Container = styled.div<{ orientation?: Orientation }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) =>
    props.orientation === Orientation.LEFT ? "row-reverse" : "row"};
`;

const SectionCard = styled(Card)<{
  orientation?: Orientation;
  hasImage: boolean;
}>`
  width: ${(props) => (props.hasImage ? "80%" : "100%")};
  margin: ${(props) => {
    if (!props.hasImage) {
      return "0";
    }
    return props.orientation === Orientation.LEFT ? "0 0 0 2rem" : "0 2rem 0 0";
  }};
`;
