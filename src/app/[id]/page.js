"use client";

import Navbar from "../accueil/ui/NavBar";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { liste } from "../api/mangaList/liste";
import Link from "next/link";
import MainComposent from "./ui/MainComposent";
import Footer from "../ui/Footer";

export default function MangaList({ params }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  let found = liste.find(function (element) {
    return element.id == params.id;
  });

  return (
    <>
      <div>
        {liste[found]}
        <Navbar className={found.class} />
        <MainComposent className={found.back}>
          <div className="h-4/5 justify-center m-auto flex">
            <img src={found.imageTop} className="w-4/5" />
          </div>
          <section id="teams" className="block teams-block ">
            <Container fluid>
              <Row>
                {found.imageShow.map((select) => {
                  return (
                    <Col sm={3}>
                      <div
                        className="mx-5 py-8 relative"
                        key={select.id}
                      >
                        <Link href={`/${select.url}`}>
                          <Image
                            src={select.img}
                            className="w-full rounded-2xl hover:opacity-100 rounded-2xl"
                          />
                        </Link>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </section>

          <div className="my-px">
            <h2 className={found.titre}>A voir également</h2>
            <Carousel responsive={responsive}>
              {found.imageCarousel.map((select) => {
                return (
                  <div className="mx-5 py-8 relative" key={select.id}>
                    <Link href={`/${select.url}`}>
                      <img
                        src={select.image}
                        className="w-full rounded-2xl hover:opacity-100 rounded-2xl"
                      />
                      <p className="absolute bottom-8 bg-black bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">
                        {select.name}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </Carousel>
          </div>

          <Footer />
        </MainComposent>
      </div>
    </>
  );
}
