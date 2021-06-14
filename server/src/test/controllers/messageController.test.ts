import chai from 'chai';
import chaiHttp from 'chai-http';
const server = 'http://localhost:7000';


chai.should();

chai.use(chaiHttp);

describe('POST /api/messages/post - (200)', function () {
  it('post the message to the storage correctly', function () {
    chai
      .request(server)
      .post('/api/messages/post')
      .send({ messageData: 'This is a demo message' })
      .end((_, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
      });
  });
});

describe('POST /api/messages/post - (400)', function () {
  it('post empty message and get a 400', function () {
    chai
      .request(server)
      .post('/api/messages/post')
      .send({ messageData: '' })
      .end((_, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
      });
  });
});

describe('GET /api/messages/ - (200)', function () {
  it('get the message with a 200 status', function () {
    chai
      .request(server)
      .get('/api/messages')
      .end((_, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
      });
  });
});

describe('GET /api/messages/ - (400)', function () {
  it('if the message is not posted yet we get a 400 status', function () {
    chai
      .request(server)
      .get('/api/messages')
      .end((_, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
      });
  });
});
