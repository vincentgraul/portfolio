import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import "./test.css";
import Section, { Orientation } from "../../../components/section/Section";
import HeaderWithTitle from "../../../components/card/Header";
import colors from "../../../colors";
import Breakpoints from "../../../breakpoints";

export default function Screenshots(): JSX.Element {
  const slider = useRef<Slider>(null);

  const sliderSettings: Settings = {
    dots: false,
    adaptiveHeight: true,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (index: number) => <Dot>{index + 1}</Dot>,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToContainer = () => {
    if (containerRef.current) {
      window.scrollTo(0, containerRef.current.offsetTop);
    }
  };

  return (
      <Section
          card={{
            renderHeader: () => <HeaderWithTitle title="Images" />,
            children: (
                <Container ref={containerRef}>
                  {Breakpoints.isTabletOrLower() ? (
                      <SwiperInformation>
                        Swipe <SwipeImage src="/icons/swipe.svg" />
                      </SwiperInformation>
                  ) : null}

                  <Slider ref={slider} {...sliderSettings}>
                    <Slide>
                      <Screen src="/img/mooncello/setup_welcome.png" />
                    </Slide>

                    <Slide>
                      <Screen src="/img/mooncello/setup_configuration.png" />
                    </Slide>

                    <Slide>
                      <Screen src="/img/mooncello/sign_up.png" />
                    </Slide>

                    <Slide>
                      <Screen src="/img/mooncello/sign_in.png" />
                    </Slide>

                    <Slide>
                      <Screen src="/img/mooncello/tables.png" />
                    </Slide>

                    <Slide>
                      <Screen src="/img/mooncello/table_columns.png" />
                    </Slide>

                    <Slide>
                      <Screen src="/img/mooncello/table_entries.png" />
                    </Slide>

                    <Slide>
                      <Screen src="/img/mooncello/table_entries_with_filter.png" />
                    </Slide>

                    <Slide>
                      <Screen src="/img/mooncello/users.png" />
                    </Slide>

                    <Slide>
                      <Screen src="/img/mooncello/files.png" />
                    </Slide>
                  </Slider>

                  {Breakpoints.isTabletOrLower() ? null : (
                      <ArrowContainer>
                        <Arrow
                            src="/icons/left-arrow.svg"
                            onClick={() => {
                              scrollToContainer();
                              slider.current?.slickPrev();
                            }}
                        />
                        <Arrow
                            src="/icons/right-arrow.svg"
                            onClick={() => {
                              scrollToContainer();
                              slider.current?.slickNext();
                            }}
                        />
                      </ArrowContainer>
                  )}
                </Container>
            ),
            noHorizontalPadding: Breakpoints.isTabletOrLower(),
            noBorder: Breakpoints.isTabletOrLower(),
            noRadius: Breakpoints.isTabletOrLower(),
          }}
          orientation={Breakpoints.isTabletOrLower() ? undefined : Orientation.LEFT}
          renderImage={() =>
              Breakpoints.isTabletOrLower() ? null : (
                  <Image src="/shapes/oval-right.svg" />
              )
          }
      ></Section>
  );
}

const Container = styled.div`
  margin-bottom: 3rem;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3.5vw;
`;

const Arrow = styled.img`
  width: 7vw;
  height: auto;
  cursor: pointer;
`;

const Image = styled.img`
  width: 5%;
`;

const Dot = styled.div`
  background-color: ${colors.primary};
  width: 1rem;
  height: 1rem;
  border: 2px dashed black;
  padding: 0.5rem;
`;

const Slide = styled.div`
  width: 100%;
  .slick-dots {
    position: initial;
    margin-top: 2rem;
  }
`;

const SwiperInformation = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${Breakpoints.isPortrait() ? "6vw" : "4vw"};
  margin-bottom: ${Breakpoints.isPortrait() ? "5vh" : "5vw"};
`;

const SwipeImage = styled.img`
  width: ${Breakpoints.isPortrait() ? "8vw" : "6vw"};
  margin-left: 3vw;
`;

const Screen = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;
