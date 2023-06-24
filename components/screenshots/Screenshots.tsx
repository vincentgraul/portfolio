import React, { useContext, useRef } from "react";
import Slider, { Settings } from "react-slick";
import styled, { ThemeContext } from "styled-components";
import { motion } from "framer-motion";
import useScrollTo from "@vincentgraul/react-components/scroll-to";
import Section, { Props as SectionProps } from "../../components/section/Section";
import HeaderWithTitle from "../../components/card/Header";
import Card from "../../components/card/Card";

interface Props extends SectionProps {
  values: string[];
  size?: number;
}

export default function Screenshots(props: Props): JSX.Element {
  const { values, size, animation } = props;
  const { resolution } = useContext(ThemeContext);
  const slider = useRef<Slider>(null);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollToTop } = useScrollTo(ref);

  const sliderSettings: Settings = {
    dots: false,
    adaptiveHeight: true,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section animation={animation}>
      <Card
        renderHeader={() => <HeaderWithTitle title="Images" center />}
        $full={resolution.isTabletOrLower}
        $radius={resolution.isLaptopOrUpper}
      >
        <div ref={ref}>
          {resolution.isTabletOrLower ? (
            <SwiperInformation>
              Swipe <SwipeImage src="/icons/swipe.svg" />
            </SwiperInformation>
          ) : null}

          <Slider ref={slider} {...sliderSettings}>
            {values.map((value: string, index: number) => (
              <Slide key={index}>
                <Screen src={value} size={size} />
              </Slide>
            ))}
          </Slider>

          {resolution.isTabletOrLower ? null : (
            <ArrowContainer>
              <Arrow
                src="/icons/arrow/black/left-arrow.svg"
                onClick={() => {
                  scrollToTop();
                  slider.current?.slickPrev();
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
              <Arrow
                src="/icons/arrow/black/right-arrow.svg"
                onClick={() => {
                  scrollToTop();
                  slider.current?.slickNext();
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
            </ArrowContainer>
          )}
        </div>
      </Card>
    </Section>
  );
}

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3.5vw;
`;

const Arrow = styled(motion.img)`
  width: 7vw;
  height: auto;
  cursor: pointer;
`;

const Slide = styled.div`
  width: 100%;
`;

const SwiperInformation = styled.span`
  ${({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  margin-bottom: 5vw;

  @media ${theme.breakpoints.portrait} {
    font-size: 6vw;
    margin-bottom: 5vh;
  }`}
`;

const SwipeImage = styled.img`
  ${({ theme }) => `
  width: 6vw;
  margin-left: 3vw;
  
  @media ${theme.breakpoints.portrait} {
    width: 8vw;
  }`}
`;

const Screen = styled.img<Pick<Props, "size">>`
  ${({ theme, size = 100 }) => `
  max-width: ${size}%;
  margin: 0 auto;
  
  @media ${theme.breakpoints.tabletOrLower} {
    max-width: 100%;
  }`}
`;
