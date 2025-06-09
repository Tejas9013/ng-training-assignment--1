const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const Task = require('../models/task');

chai.use(chaiHttp);
const { expect } = chai;

describe('Task API', () => {
  before(async () => {
    await Task.deleteMany({});
  });

  let taskId;

  it('should create a new task', (done) => {
    chai.request(app)
      .post('/api/task')
      .send({ title: 'Test Task', description: 'Unit test', status: 'pending' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.title).to.equal('Test Task');
        taskId = res.body._id;
        done();
      });
  });

  it('should get all tasks', (done) => {
    chai.request(app)
      .get('/api/tasks')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should update a task', (done) => {
    chai.request(app)
      .put(`/api/task/${taskId}`)
      .send({ status: 'completed' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal('completed');
        done();
      });
  });

  it('should delete a task', (done) => {
    chai.request(app)
      .delete(`/api/task/${taskId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Task deleted');
        done();
      });
  });
});
