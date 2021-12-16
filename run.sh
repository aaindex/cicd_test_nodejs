docker rm -f aaindex-node-01
docker run -itd --name aaindex-node-01 -p 0.0.0.0:80:80 aaindex/node-01:latest
