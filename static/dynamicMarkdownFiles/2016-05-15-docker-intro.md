---
title: My docker notes
author: 'Chris Choy'
date: '2016-05-15'
tags:
  - code
  - docker
---

Docker is a very useful tools in orchestrating services.  
Below is a few use cases.

# Setup docker

Run the following command on linux to get started(might need sudo rights):

```bash
wget -qO- https://get.docker.com/ | sh
usermod -aG docker %s' % user_name
```

The second line adds the user to the docker group so that you don't
need sudo-right to run docker commands.

## Alternative with docker-machine

To setup with docker-machine, we need password-free ssh and password-free sudoer rights.

To allow password-free suoders, add the following lines to the /etc/sudoers

```bash
%sudo ALL=(ALL) NOPASSWD: ALL
```

Push your public key to the authorized_keys chain.
```bash
mkdir -p ~/.ssh
cat key_text >> '~/.ssh/authorized_keys' 
```

Call docker-machine to help organize the entire things:
```bash
apt-get install -y python-pip
pip install docker-compose
```


## Docker compose
You can install docker compose via 

```bash
sudo apt-get install -y python-pip
sudo pip install docker-compose
```



# My docker recipes

## Netatalk
To set up a Apple Time Machine:

```yaml
timemachine:
    build: .
    volumes:
        - /LocalPath:/TimeMachine
    mem_limit: 512m
    cpu_shares: 128
    net: host
    ports:
     - "548:548"
    hostname: myhostname
    restart: always
```

```dockerfile
FROM cptactionhank/netatalk:latest
MAINTAINER Denis Gladkikh "https://github.com/outcoldman"

RUN groupadd -g1000 choy
RUN useradd --no-create-home -u1000 -g1000 -G users choy
RUN echo "user:Password" | chpasswd

COPY ./afp.conf /etc/netatalk/afp.conf
```

Reference: http://outcoldman.com/en/archive/2015/03/18/docker-for-home-server/


## ELK stack

```yaml
elasticsearch:
  image: elasticsearch:latest
  command: elasticsearch -Des.network.host=0.0.0.0
  ports:
    - "9200:9200"
    - "9300:9300"
  volumes:
    - /mnt/ctssd/esdata:/usr/share/elasticsearch/data
  restart: always
logstash:
  image: logstash:latest
  command: logstash -f /etc/logstash/conf.d/nginx.conf
  volumes:
    - ./logstash/config:/etc/logstash/conf.d
    - /mnt/ctssd/sweetheartkitchenlogs/logs:/log
  ports:
    - "5000:5000"
  links:
    - elasticsearch
  restart: always
kibana:
  build: kibana/
  volumes:
    - ./kibana/config/kibana.yml:/opt/kibana/config/kibana.yml
  ports:
    - "5601:5601"
  links:
    - elasticsearch
  restart: always
```


## Python, Jupyter notebook with ssh tunnel

Jupyter notebook with SSH tunnel:

```yaml
version: '2'
services:
  core:
   build: .
   command: ipython notebook --ip=*
   volumes:
     - /local_code_path:/code
  ssh:
   image: jdeathe/centos-ssh
   environment:
     - SSH_AUTHORIZED_KEYS=ssh-rsa MY_PUBLIC_KEY
     - SSH_USER=choy
   links:
     - core
   ports:
     - "10022:22"
```

```dockerfile
 FROM continuumio/anaconda:4.2.0
 ENV PYTHONUNBUFFERED 1
 RUN apt-get update && apt-get install -y build-essential graphviz
 RUN conda install -y gcc
 RUN mkdir /code
 WORKDIR /code
 ADD ./requirements.txt /code/
 RUN pip install -r requirements.txt
 ADD ./conda-requirements.txt /code/
 RUN conda install --yes --file conda-requirements.txt
```
