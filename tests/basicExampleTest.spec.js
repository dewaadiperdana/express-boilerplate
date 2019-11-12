import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
chai.should();

describe('Basic Example Test', () => {
  describe('GET /', () => {
    it('should return http status of 200', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
