# Monitoring application using Prometheus and Grafana

## Install dependencies
```bash
pnpm add @willsoto/nestjs-prometheus prom-client
```

## Register Prometheus on Nest application

Use app.module.ts to register the Prometheus module
```
@Module({
  imports: [PrometheusModule.register({ path: '/metrics' })],
  controllers: [AppController],
  providers: [
    AppService,
    makeCounterProvider({
      name: 'get_hello_calls',
      help: 'Total number of getHello calls',
    }),
  ],
})
export class AppModule {}
```
path: '/metrics' - This  will be expose metrics information on /metrics from NestApp. Prometheus
will pulling metrics information from /metrics API. Prometheus will store those values in a time-series
database.

[More Prometheus configs: https://github.com/willsoto/nestjs-prometheus]

## Call matrices from NestApp


## Prometheus configuration file
> prometheus.yml

This has few configuration which needed by Prometheus. Prometheus will pull data based on the configuration
provided in the prometheus.yml file

## How to run Prometheus and Grafana
Best way of running both services using Docker. After creating the docker-compose.yml file, we can start both
containers

```bash
docker compose up -d
```

Now, Prometheus runs on http://localhost:9090. It should shows the matrices which we created on search. Once
execute the matrix, the statistics should show on the Prometheus itself.
Eg. API call count

But, better to see the visualization from Grafana. Go to http://localhost:3030, use the admin/admin as login
credentials. Then, go to dashboard and create a new dashboard with Add visualization by add Prometheus as a 
data source. After then, from dashboard, we can select the Matric that we created on Prometheus. Then can see
the visualization for the attached metric. Like wise, can add many visualization for each metric.

[Many Grafana dashboards: https://grafana.com/grafana/dashboards]

That's it!!!