import React, { useState } from "react";
import Slider from "react-slick";
import dummyData from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { device } from './styles/Media'; // Assuming you have a Media.js file with breakpoints

const App = () => {
  const [change, setChange] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (oldIndex, newIndex) => {
      setChange(change + 1);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Heading style={{ transform: `rotate(${change * 90}deg)` }}>Assignment</Heading>
      <StyledSlider {...settings}>
        {dummyData.map((item, index) => (
          <div key={index}>
            <ImageContainer>
              <Image src={item.src} alt={item.Name} />
            </ImageContainer>
            <TextContainer>
              <Title>{item.Name}</Title>
              <Description>{item.description}</Description>
            </TextContainer>
          </div>
        ))}
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
`;

const Heading = styled.div`
  color: white;
  text-align: center;
  font-size: 32px;
  margin: 80px 0;
`;

const StyledSlider = styled(Slider)`
  margin-left: 5vh;
  margin-right: 5vh;
  padding-left: 50px;
  padding-right: 50px;

  @media ${device.tablet} {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media ${device.mobileL} {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 30vh;
  height: 30vh;
  border: 0.5rem solid white;
  object-fit: cover;

  @media ${device.tablet} {
    width: 25vh;
    height: 25vh;
  }

  @media ${device.mobileL} {
    width: 20vh;
    height: 20vh;
  }
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  color: white;
`;

const Description = styled.p`
  color: white;
`;

export default App;
