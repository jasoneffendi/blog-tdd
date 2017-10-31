var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')
var app = require('../app.js')
var test = ''
chai.use(chaiHttp)

describe('post article route', function () {
  it('should return the article data, after they\' re saved to the database', function (done) {
    chai.request(app)
    .post('/api/articles')
    .send({
      id: 'asdasds',
      title: 'Jaenal Jadi Makin Tamvan',
      content: 'INI HOAX',
      author: 'Redha Pake H'
    })
    .end(function (err, response) {
        console.log(response.body)
        test = response.body._id
      response.status.should.equal(200)
      response.body.should.be.an('object')
      response.body.should.have.property('_id')
      response.body.should.have.property('title')
      response.body.should.have.property('content')
      response.body.should.have.property('author')
      response.body.title.should.equal('Jaenal Jadi Makin Tamvan')
      response.body.content.should.equal('INI HOAX')
      response.body.author.should.equal('Redha Pake H')
      done()
    })
  })
})

describe('get article route', function () {
    it('should return the article data', function (done) {
        console.log(test, 'halo ini test')
        chai.request(app)
        .get('/api/articles')
        .end(function (err, response) {
        //   console.log(response.body)
        response.status.should.equal(200)
        done()
        })
    })
})

describe('edit article route', function () {
    it('should edit data', function (done) {
        chai.request(app)
        .put(`/api/articles/${test}`)
        .send({
            title: 'Jaenal Jadi Makin Ga Tamvan',
            content: 'INI HOAX',
            author: 'Redha Pake H'
        })
        .end(function (err, response) {
        //   console.log(response.body)
        response.status.should.equal(200)
        response.body.should.be.an('object')
        response.body.should.have.property('title')
        response.body.should.have.property('content')
        response.body.should.have.property('author')
        response.body.title.should.equal('Jaenal Jadi Makin Tamvan')
        response.body.content.should.equal('INI HOAX')
        response.body.author.should.equal('Redha Pake H')
        done()
        })
    })
})

describe('delete article route', function () {
    it('should delete data', function (done) {
        chai.request(app)
        .delete(`/api/articles/${test}`)
        .end(function (err, response) {
        //   console.log(response.body)
        response.status.should.equal(200)
        response.body.should.be.an('object')
        response.body.should.have.property('title')
        response.body.should.have.property('content')
        response.body.should.have.property('author')
        response.body.title.should.equal('Jaenal Jadi Makin Ga Tamvan')
        response.body.content.should.equal('INI HOAX')
        response.body.author.should.equal('Redha Pake H')
        done()
        })
    })
})