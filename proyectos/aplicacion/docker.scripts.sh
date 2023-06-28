
docker image pull node:latest

docker container create --name my-dependency-downloader -w /myapp -v .:/myapp node:latest npm install 

docker container start

docker logs my-dependency-downloader

docker container rm my-dependency-downloader

---

docker run --rm -w /myapp -v .:/myapp node:latest npm install 

docker run --rm -w /myapp -v .:/myapp -p 8080:3000 node:latest npm start

Open a browser an type: http://localhost:8080
---

-w: WORKING DIR

----
Let's create a container image with
- nginx
- my app downloaded from git, and packed, ready for production


---

In this examplem we have been using docker for:
- Execute node & npm in my dev environment inside a container
- To download, and build the project...
- To create a container image with a web server(nginx) configured
  to run your app