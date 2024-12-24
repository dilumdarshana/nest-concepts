import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';
import { SharedArray } from 'k6/data';

const failureRate = new Rate('failed_requests');

const BASE_URL = 'http://host.docker.internal:3000'; 

export const options = {
  vus: 10,  // Number of virtual users
  // duration: '30s',  // Test duration
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
    failed_requests: ['rate<0.1'], // Less than 10% of requests should fail
  },
  stages: [
    { duration: '1m', target: 50 },
    { duration: '3m', target: 50 },
    { duration: '1m', target: 0 },
  ],
};

export default function () {
  // Replace with your API endpoint
  const response = http.post(`${BASE_URL}/signin`, {
    username: 'admin',
    password: 'admin',
  });
  
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
  
  sleep(1);
}
