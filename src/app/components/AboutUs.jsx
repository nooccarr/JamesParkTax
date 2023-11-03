import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import PageHeader from './PageHeader';
import AboutUsImg from '../images/about-us.jpg';
import '../styles/about-us.css';

const AboutUs = () => {
  return (
    <>
      <div className='about-us-header-image'>
        <PageHeader title='회사소개' />
      </div>

      <main>
        <Container className='my-5'>
          <Row>
            <Col className='text-center pb-5'>
              <h1 className='header-h1'>
                <span className='header-span'>믿고 맡길수 있는 </span>
                든든한 회계사
              </h1>
              <h3 className='header-h3'>탁월한 지식으로 성심성의껏 고객의 재무 안전을 책임집니다.</h3>
            </Col>
          </Row>
          <Row>
            <Col className='mb-5'>
              <Ratio aspectRatio='1x1'>
                <img src={AboutUsImg} alt='' />
              </Ratio>
            </Col>
            <Col className='mx-5'>
              <p>안녕하세요?</p>
              <p>제임스 박 회계사입니다.</p>
              <p>유능한 명의는 사람의 생명을 구하고 유능한 회계사는 사업체를 구한다고 합니다.</p>
              <p>올바른 회계사 선택이야 말로 고객의 소중한 재산을 지킬 수 있습니다.</p>
              <p>또한 무거운 세금때문에 잠못이룬 적이 있다면 언제든 연락주세요.</p>
              <p>고객의 절세가 최상의 목표이며 이를 위해 최선을 다하고 있습니다.</p>
              <p>지금까지 만족스러운 세금 및 회계 서비스를 받지 못하신 분이 계시면 저희 회사 이메일, 카카오톡, 전화 및 방문 상담하시기 바랍니다.</p>
              <p>감사합니다.</p>
              <p>&nbsp;</p>
              <p>대표 회계사 제임스 박</p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default AboutUs;
