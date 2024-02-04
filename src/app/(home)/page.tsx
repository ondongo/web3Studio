"use client";
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import useWindowSize from "../../hooks/useResize";

function Studio() {
  useEffect(() => {
    AOS.init({
      once: false,
      delay: 100,
      duration: 600,
    });
    AOS.refresh();
  }, []);

  const cursorRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      }

      console.log("Bougeeeee ici", cursorRef.current);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //===================================>  Scroll to comments section
  //State For Scroll
  const ProjectSectionRef = useRef<HTMLDivElement>(null);
  const handleGoToProject = () => {
    const ref = ProjectSectionRef;
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const AboutSectionRef = useRef<HTMLDivElement>(null);
  const handleGoToAbout = () => {
    const ref = AboutSectionRef;
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const handleGoToBottom = () => {
    const ref = bottomSectionRef;
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TopSectionRef = useRef<HTMLDivElement>(null);
  const handleGoToTop = () => {
    const ref = TopSectionRef;
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { width } = useWindowSize();

  if (width === undefined) return null;

  const mobileWidthThreshold = 768;
  const isMobileOrTablet = width <= mobileWidthThreshold;
 
  if (isMobileOrTablet) {
    // Affichage d'un message d'avertissement pour les mobiles et tablettes
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
        bg="blackAlpha.900"
        color="white"
      >
        <Text fontSize="2xl" p={4}>
          Désolé, ce site n'est pas optimisé pour les appareils mobiles et les
          tablettes.
        </Text>
        <Text fontSize="lg"  p={4}>
          Veuillez utiliser un ordinateur de bureau pour la meilleure
          expérience.
        </Text>
      </Flex>
    );
  }

  return (
    <>
      <div id="cursor" className="cursor" ref={cursorRef}>
        <div className="ring">
          <div></div>
        </div>
        <div className="ring">
          <div></div>
        </div>
      </div>

      <Flex
        minHeight={"250vh"}
        bg={"#000000"}
        direction={"column"}
        fontFamily="Inter"
        overflow={"hidden"}
      >
        {NavBar()}

        {/* Main Content */}
        <Flex mt={"7rem"} width="100%">
          {/* Text Section */}

          <Flex direction={"column"}>
            <Flex
              ml={"3rem"}
              minWidth={"622.828px"}
              maxWidth="622.828px"
              zIndex={"3"}
              direction="column"
              justifyContent="center"
              color="#FFF"
              fontFamily="Inter"
              fontSize="94.8px"
              fontWeight={600}
              lineHeight="103.68px"
              position={"relative"}
              className="navItem"
              style={{ animationDelay: "0.3s" }}
            >
              <Text data-aos="zoom-in">Design studio</Text>
              <Flex
                justifyContent={"flex-end"}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                for the
              </Flex>
              <Flex
                justifyContent={"flex-end"}
                data-aos="fade-right"
                data-aos-delay="400"
              >
                web3 world
              </Flex>
            </Flex>

            <Flex gap={"10px"} mt={"4rem"}>
              <Box
                as="button"
                onClick={handleGoToBottom}
                _hover={{ color: "#C8B9F4", transform: "scale(1.1)" }}
              >
                <Image src="/studioWeb/ArrowDown.png" alt="" />
              </Box>

              <Text
                color="rgba(255,255,255,0.6)"
                fontFamily="Inter"
                fontWeight={"regular"}
                fontSize={"16px"}
                lineHeight={"30px"}
                zIndex={"100"}
                w="312.67px"
              >
                We help companies design their products to be ready for web3
                world
              </Text>
            </Flex>
          </Flex>
          {/* Image Section */}
          <Flex
            height="810px"
            flexShrink="0"
            zIndex={"2"}
            position={"absolute"}
            top={"2%"}
            left={"22%"}
            className="navItem"
            style={{ animationDelay: "0.4s" }}
          >
            <Image
              src="/studioWeb/studioPhone.jpeg"
              alt=""
              position={"relative"}
            />

            <Text
              color="rgba(255,255,255,0.6)"
              fontFamily="Inter"
              fontWeight={"regular"}
              fontSize={"19px"}
              lineHeight={"30px"}
              position="absolute"
              bottom="-90%"
              right="12%"
              zIndex={99}
              maxW={"200px"}
            >
              Passion in the new wave of crypto
            </Text>

            <Text
              color="rgba(255,255,255,0.6)"
              fontFamily="Inter"
              fontWeight={"regular"}
              fontSize={"19px"}
              lineHeight={"30px"}
              position="absolute"
              bottom="-90%"
              right="42%"
              zIndex={99}
              maxW={"200px"}
            >
              High-quality design craft
            </Text>
          </Flex>
        </Flex>

        {/* Image Section */}
        <Image
          src="/studioWeb/light.png"
          alt=""
          position="absolute"
          top="23%"
          right="0"
          zIndex={"40"}
          data-aos="fade-down"
        />

        <Text
          zIndex={"3"}
          mt={"28rem"}
          px={"3rem"}
          color="#FFF"
          fontFamily="Inter"
          fontSize="94.8px"
          fontWeight={600}
          data-aos="fade-up"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        {/* Image Section */}

        <Flex mt={"8rem"} alignItems={"center"} data-aos="fade-up" px={"3rem"}>
          <Flex
            maxW={"720px"}
            maxH={"245.19px"}
            direction={"column"}
            gap={"10px"}
          >
            <Text
              zIndex={"3"}
              color="#FFF"
              fontFamily="Inter"
              fontWeight={"medium"}
              fontSize={"34px"}
            >
              What is Web3 studio?
            </Text>
            <Text
              zIndex={"3"}
              color="#FFF"
              fontFamily="Inter"
              fontWeight={"regular"}
              fontSize={"19px"}
              lineHeight={"30px"}
            >
              Things around crypto, NFTs and web3 as a whole are unbelievably
              Interesting. Unfortunately, the overall usability as well as the
              quality of the UI is often still not up to the task. To achieve
              mass adoption, overcoming those hurdles will be key. And this is
              where our story begins.
            </Text>
          </Flex>

          <Image
            src="/studioWeb/infinite.png"
            alt=""
            maxW={"720px"}
            maxHeight={"217px"}
          />
        </Flex>
        {ProjectSection()}
        {OtherProjectSection()}

        <Flex gap={"20px"} data-aos="fade-left" px={"3rem"} zIndex={4}>
          <Flex gap={"20px"}>
            <Image
              alt=""
              src="/studioWeb/Project1.png"
              minW={"668px"}
              maxW={"668px"}
              minH={"352px"}
              maxH={"352px"}
            />
            <Image
              alt=""
              src="/studioWeb/Project2.png"
              minW={"668px"}
              maxW={"668px"}
              minH={"352px"}
              maxH={"352px"}
            />

            <Image
              alt=""
              src="/studioWeb/Project4.png"
              minW={"668px"}
              maxW={"668px"}
              minH={"352px"}
              maxH={"352px"}
            />
          </Flex>
        </Flex>

        <Image src="/studioWeb/div.png" alt="" data-aos="fade-left" />

        <Flex direction={"column"} gap={"20px"} px={"3rem"} mb={"15rem"}>
          <Flex
            minWidth={"667px"}
            minH={"268px"}
            maxWidth="667px"
            zIndex={"3"}
            direction="column"
            justifyContent="center"
            color="#FFF"
            fontFamily="Inter"
            fontSize="94.8px"
            fontWeight={"medium"}
            lineHeight="103.68px"
            mt={"1rem"}
            data-aos="fade-down"
          >
            <Text zIndex={"3"} color="#FFF" fontFamily="Inter">
              How we can help grow
            </Text>
          </Flex>

          <Image
            src="/studioWeb/lightLeft.png "
            alt=""
            position="absolute"
            top="53%"
            left="0"
            zIndex={1}
            data-aos="fade-down"
          />

          <Image
            src="/studioWeb/lightLeft.png"
            alt=""
            position="absolute"
            top="73%"
            left="-34%"
            zIndex={1}
            data-aos="fade-down"
          />

          <Flex gap={"25px"} data-aos="fade-right">
            <Flex direction={"column"} gap={"15px"}>
              <Text
                zIndex={"3"}
                color="#FFF"
                fontFamily="Inter"
                fontWeight={"regular"}
                fontSize={"36px"}
              >
                Product clarity
              </Text>
              <Text
                zIndex={"3"}
                color="rgba(255,255,255,0.6)"
                fontFamily="Inter"
                fontWeight={"regular"}
                fontSize={"16px"}
                lineHeight={"30px"}
              >
                UX/UI design
              </Text>

              <Text
                zIndex={"3"}
                color="rgba(255,255,255,0.6)"
                fontFamily="Inter"
                fontWeight={"regular"}
                fontSize={"19px"}
                lineHeight={"30px"}
              >
                Maintain process
              </Text>
            </Flex>
            <Image src="/studioWeb/help.png" alt="" />
            <Flex direction={"column"} gap={"15px"}>
              <Text
                zIndex={"3"}
                color="#FFF"
                fontFamily="Inter"
                fontWeight={"regular"}
                fontSize={"36px"}
              >
                Product clarity
              </Text>
              <Text
                zIndex={"3"}
                color="rgba(255,255,255,0.6)"
                fontFamily="Inter"
                fontWeight={"regular"}
                fontSize={"16px"}
                lineHeight={"30px"}
              >
                UX/UI design
              </Text>

              <Text
                zIndex={"3"}
                color="rgba(255,255,255,0.6)"
                fontFamily="Inter"
                fontWeight={"regular"}
                fontSize={"16px"}
                lineHeight={"30px"}
              >
                Maintain process
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {AboutSection()}

        <Flex
          color={"white"}
          direction={"row"}
          width="100%"
          p={"24px"}
          zIndex={"4"}
          ref={bottomSectionRef}
        >
          {/* Element at the center */}
          <Flex justifyContent={"center"} flex={2} padding="8px 24.766px">
            <Text
              className="navItem"
              padding="8px 24.766px"
              style={{ animationDelay: "0.2s" }}
            >
              © WebStudio by Gloire ODG. All Rights Reserved.
            </Text>

            <Text
              className="navItem"
              padding="8px 24.766px"
              style={{ animationDelay: "0.2s" }}
            >
              Privacy Policy
            </Text>
          </Flex>

          <Flex justifyContent={"flex-end"} flex={1} padding={4}>
            <Box as="button">
              <Image
                alt=""
                src="/studioWeb/ArrowTop.png"
                onClick={handleGoToTop}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );

  function OtherProjectSection() {
    return (
      <Flex
        minWidth={"667px"}
        minH={"268px"}
        maxWidth="667px"
        zIndex={4}
        direction="column"
        justifyContent="center"
        color="#FFF"
        fontFamily="Inter"
        fontSize="94.8px"
        fontWeight={"medium"}
        lineHeight="103.68px"
        mt={"10rem"}
        mx={"6rem"}
        data-aos="fade-down"
      >
        <Text zIndex={"3"} color="#FFF" fontFamily="Inter">
          Other projects
        </Text>
      </Flex>
    );
  }

  function AboutSection() {
    return (
      <Flex
        gap={"40px"}
        px={"3rem"}
        data-aos="zoom-in"
        mb={"10rem"}
        ref={AboutSectionRef}
      >
        <Image alt="" src="/studioWeb/about1.png" w={"231px"} h={"345px"} />
        <Flex direction={"column"} gap={"20px"}>
          <Text
            fontFamily="Inter"
            fontSize="94.8px"
            fontWeight={"medium"}
            zIndex={"3"}
            color="#FFF"
          >
            About
          </Text>
          <Text maxW={"618px"}>
            Team of product and brand designers that are really passionate about
            blockchain technology and good design. We are not just UI freaks! We
            advocate users for better product experience and common sense.
          </Text>

          <Flex gap={"10px"} alignItems={"center"}>
            <Text color={"#fff"}>More about us</Text>

            <Box
              as="button"
              _hover={{ color: "#C8B9F4", transform: "scale(1.1)" }}
            >
              <Image alt="" src="/studioWeb/ArrowRight.png" />
            </Box>
          </Flex>

          <Image alt="" src="/studioWeb/about02.png" w={"288px"} h={"192px"} />
        </Flex>

        <Flex alignItems={"flex-end"}>
          <Image alt="" src="/studioWeb/about1.png" w={"231px"} h={"345px"} />
        </Flex>
      </Flex>
    );
  }

  function ProjectSection() {
    return (
      <Flex
        direction={"column"}
        gap={"20px"}
        px={"3rem"}
        ref={ProjectSectionRef}
      >
        <Flex
          minWidth={"667px"}
          minH={"268px"}
          maxWidth="667px"
          zIndex={"3"}
          direction="column"
          justifyContent="center"
          color="#FFF"
          fontFamily="Inter"
          fontSize="94.8px"
          fontWeight={"medium"}
          lineHeight="103.68px"
          mt={"10rem"}
          data-aos="fade-down"
        >
          <Text zIndex={"3"} color="#FFF" fontFamily="Inter">
            Projects
          </Text>
        </Flex>

        <Flex gap={"20px"} data-aos="fade-left">
          <Flex direction={"column"} gap={"20px"}>
            <Image
              alt=""
              src="/studioWeb/Project1.png"
              minW={"668px"}
              maxW={"668px"}
              minH={"429px"}
              maxH={"429px"}
            />
            <Image
              alt=""
              src="/studioWeb/Project2.png"
              minW={"668px"}
              maxW={"668px"}
              minH={"429px"}
              maxH={"429px"}
            />
          </Flex>

          <Flex direction={"column"} gap={"20px"}>
            <Image
              alt=""
              src="/studioWeb/Project3.png"
              minW={"668px"}
              maxW={"668px"}
              minH={"677px"}
              maxH={"677px"}
            />
            <Image
              alt=""
              src="/studioWeb/Project4.png"
              minW={"668px"}
              maxW={"668px"}
              minH={"352px"}
              maxH={"352px"}
            />
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function NavBar() {
    return (
      <Flex
        color={"white"}
        direction={"row"}
        width="100%"
        p={"24px"}
        zIndex={"4"}
        ref={TopSectionRef}
      >
        {/* Element at the start */}
        <Flex flex={1} padding={4}>
          Logo
        </Flex>

        {/* Element at the center */}
        <Flex
          justifyContent={"center"}
          flex={2}
          padding="8px 24.766px"
          alignItems={"center"}
        >
          <Text
            className="navItem"
            padding="8px 24.766px"
            style={{ animationDelay: "0s" }}
            _hover={{ color: "#C8B9F4" }}
          >
            Home
          </Text>
          <Text
            className="navItem"
            padding="8px 24.766px"
            style={{ animationDelay: "0.1s" }}
            as={"button"}
            onClick={handleGoToAbout}
            _hover={{ color: "#C8B9F4" }}
          >
            About
          </Text>
          <Text
            className="navItem"
            padding="8px 24.766px"
            style={{ animationDelay: "0.2s" }}
            onClick={handleGoToBottom}
            as={"button"}
            _hover={{ color: "#C8B9F4" }}
          >
            Contact
          </Text>

          <Flex
            position="relative"
            padding="8px 24.766px 8px 25px"
            alignItems="flex-start"
            className="navItem"
            style={{ animationDelay: "0.3s" }}
            onClick={handleGoToProject}
            as={"button"}
          >
            <Text _hover={{ color: "#C8B9F4" }}>Project</Text>

            {/* "Like" icon and count with absolute positioning */}
            <Flex
              position="absolute"
              right="0px"
              top="5px"
              background="linear-gradient(90deg, #FFF 0%, #C8B9F4 100%)"
              color={"#000"}
              width="17px"
              height="17px"
              p="4px 5.534px 3px 5.719px"
              justifyContent="center"
              alignItems="center"
              borderRadius="8.5px"
            >
              <Flex
                color="#000"
                width="5.747px"
                height="10px"
                flexDirection="column"
                justifyContent="center"
                flexShrink="0"
                textAlign="center"
                fontFamily="Inter"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="15px"
              >
                2
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Element at the end */}
        <Flex justifyContent={"flex-end"} flex={1} padding={4}>
          <Button
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="500"
            rounded={"full"}
            //onClick={handleBackDashboard}
            color="#000"
            py={"1rem"}
            background={"#C8B9F4"}
            lineHeight={"normal"}
            border={"2px"}
            borderColor="linear-gradient(90deg, #FFF 0%, #C8B9F4 100%)"
            _hover={{ background: "#C8B9F4", transform: "scale(1.1)" }}
          >
            Prendre un devis
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default Studio;
