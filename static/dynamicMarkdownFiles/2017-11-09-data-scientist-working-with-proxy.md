---
title: 'Data Scientist Working with Proxy '
author: Chris Choy
date: '2017-11-09'
slug: data-scientist-working-with-proxy
categories:
  - Technical Notes
tags:
  - proxy
  - python
  - R
  - git
  - docker
---

This is a set of notes to remind me of common settings for R, Python, git, docker to work behind proxy server under Windows. 

# R

Under RStudio, the default install.packages respects windows proxy settings.

If you would like to install via devtools::github_install, you would then need to set:


```r
# Setting here
library(httr)
set_config(
  use_proxy(url="proxy_url", port=1234)
)
```

The above setting would also work for rvest library.

# Python

To conda install behind proxy, create a .condarc file containing
```yaml
proxy_servers:
    http: http://172.**.*.***:8080
    https: https://172.**.*.***:8080


ssl_verify: False
```

To pip install behind proxy,

```bash
pip install --proxy=proxy_url:1234
```

For requests library, to connect with proxy,

```python
proxies = {
  'http': 'http://abc:1234',
  'https': 'https://abc:1234'
}
requests.post(url=url, 
              proxies=proxies
              )
```

# git

Git config via
```bash
git config --global http.proxy http://<username>:<password>@<proxy-server-url>:<port>
```

Other ideas can be seen at https://stackoverflow.com/questions/16067534/only-use-a-proxy-for-certain-git-urls-domains

# Docker

First construct a virtualbox host machine with the proxy settings:

```bash
docker-machine create -d virtualbox \
  --engine-env HTTP_PROXY=http://example.com:1234 \
  --engine-env HTTPS_PROXY=https://example.com:1234 \
  --engine-env NO_PROXY=example2.com\
  proxybox
```

Then run the docker images with the proxy setting as well:
```bash
docker run -e http_proxy="http://abc:1234" -e https_proxy="https://abc:1234" -it dockername /bin/bash
```