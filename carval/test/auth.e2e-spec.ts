import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup request', () => {
    const email = 'd.xyz1@test.com';
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        email: email,
        password: '1qaz!QAZ'
      })
      .expect(201)
      .then(((res) => {
        expect(res.body.email).toEqual(email);
        expect(res.body.id).toBeDefined();
      }))
  });
});
