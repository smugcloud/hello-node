To get this image up and running, follow the below steps.  This will start a container listening on port 9000, but bound to the host's port 8080.


On OSX, make sure you have the docker-machine running
```
docker build -t hello-node .

docker run -d -p 8080:9000 --name hello-node hello-node
```
Check your docker-machine IP
```
docker-machine ip <machine_name>
192.168.99.100

$ curl 192.168.99.100:8080
Hello from container:97026509b28e
```
