import { useRef } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardLink,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

function SmallCard({ title, text, link, img, shortname }) {
  const _blank = useRef("_blank");
  return (
    <Card className="bg-teal-100">
      <CardBody>
        <CardTitle className="h3">{title}</CardTitle>
      </CardBody>
      <CardBody className="">
        <CardText className="p-2 justify-center">
          <img className="flex" alt="" src={img} />
        </CardText>
        <CardText className="p-2">{text}</CardText>
        <CardText className="p-2">
          <CardLink
            className="text-blue-600 rounded border-black border-2 p-2"
            href={link}
            target={_blank}
          >
            {shortname || link}
          </CardLink>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default function Resources() {
  return (
    <Container className="pb-1">
      <Row className="pb-2">
        <Card className="bg-teal-200 text-black">
          <Col className="h1">Resources</Col>
        </Card>
      </Row>
      <Row className="pb-2">
        <Col>
          <SmallCard
            title={"Ethereum"}
            text={""}
            img={"./img/hero.webp"}
            link={"https://ethereum.org"}
          ></SmallCard>
        </Col>
        <Col>
          <SmallCard
            title={"DefilLama"}
            text={"The place to look for TVL"}
            img={"https://cdn.publish0x.com/prod/fs/images/300e36ef13a257666b031d5da7012b565a0a1c55033becbdbf690ebcf21eb121.png"}
            link={"https://defillama.com/chain/Ethereum"}
          ></SmallCard>
        </Col>
        <Col>
          <SmallCard
            title={"Etherscan"}
            text={"Explorer for Ethereum"}
            img="./img/etherscan-logo.png"
            link={"https://etherscan.io"}
          ></SmallCard>
        </Col>
      </Row>
    </Container>
  );
}
