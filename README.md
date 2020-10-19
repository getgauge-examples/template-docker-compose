# Gauge Docker Compose example

This is a sample testing project using [Gauge](http://gauge.org) JavaScript and [Taiko](https://taiko.dev).
This project tests some of the functionalities of the [active admin demo](https://github.com/activeadmin/activeadmin) application. 

## Running this example
The tests are run on Chrome by default.

### Prerequisites

This example requires the following softwares to run.
  * [Docker](https://nodejs.org/en/)
  * [Gauge](https://docs.gauge.org/getting_started/installing-gauge.html)
  * [Node.JS](https://nodejs.org/en/)
  * [Docker-Compose](https://docs.docker.com/compose/)

### Setting up the System Under Test (SUT)

Clone this repository and initialize the active admin app sub repository

```
git submodule update --init
```

## Run specs

This example illustrates running Gauge specs in a docker-compose setup. 

The topology: 

- `db`: holds a postgres instance
- `application`: a Ruby on Rails demo application
- `test`: contains the gauge-taiko tests that verifies against `application`

To execute:

```
docker-compose run test || docker-compose down
``` 

Note: `test` is the name of the service defined in [`docker-compose.yml`](docker-compose.yml), and can be changed

## Topics covered in the example

* [Concepts](https://docs.gauge.org/latest/writing-specifications.html#concept)
* [Specification](https://docs.gauge.org/latest/writing-specifications.html#specifications-spec), [Scenario](https://docs.gauge.org/latest/writing-specifications.html#longstart-scenarios) & [Step](https://docs.gauge.org/latest/writing-specifications.html#longstart-steps) usage
* [Table driven execution](https://docs.gauge.org/latest/execution.html#data-driven-execution)
* [External datasource (special param)](https://docs.gauge.org/latest/execution.html#external-csv-for-data-table)
* Running Gauge specs with [NPM](https://www.npmjs.com/)
