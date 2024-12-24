import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,  // Number of virtual users
  duration: '30s',  // Test duration
};

export default function () {
  // Replace with your API endpoint
  const response = http.get('http://host.docker.internal:3000/');
  
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
  
  sleep(1);
}
