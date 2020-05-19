const chai=require('chai');
const chaihttp=require('chai-http');
const server=require('../app');
const should=chai.should();
chai.use(chaihttp);
describe('app',()=>{
    it('should index all reviews on / get',(done)=>{
        chai.request(server)
        .get('/reviews/new')
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.be.html;
            done();
        
        });
    });
});