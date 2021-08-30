# Node JS API

This project would best be run on a docker instance.

If docker is installed and properly configured on your machine, simply run the following command: `docker-compose up --build`.

This command (assuming correct configs) should create a database and populate it with the requires schema.

The endpoints used are as specified here https://github.com/doshexchnage/flutter_nodejs_test .

Once an IP address for your docker instance is acquired, you can add the address to the flutter `dotenv` file to allow for correct routing of requests.
