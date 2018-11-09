---
title: SSH Tunnel Note
excerpt: "How to use SSH tunnel, some notes to myself."
tags: [ssh, ssh tunnel, ipython notebook]
comments: true
date: 2015-10-21T20:32:38+08:00
---

One thing I have learnt over time is that you can do a lot with SSH
server: transfer files, proxy, reverse tunnelling.  Knowing some of
the tricks would save a lot of time.
This serves as notes to myself how to setup basic ssh access and tunnelling.


## Setup SSH access without password

To setup SSH access without password would involve three steps.

1. Generate key pairs
2. Copy it to authorized key on remote server
3. Add the key locally with ssh-add (optional)

```bash
# Generate key pairs
ssh-keygen -t rsa
# Copy the public key to authorized_keys in remote server
ssh-copy-id ~/.ssh/yourkey.pub
# Or 
cat ~/.ssh/yourkey.pub | ssh user@123.45.56.78 "mkdir -p ~/.ssh && cat >>  ~/.ssh/authorized_keys"
# Add this key to the list of private keys locally
ssh-add ~/.ssh/yourkey
```

Reference: <https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2>

## Copying files

For a simple copy, scp would do.  scp is similar to cp in terms of
use. 

```bash
# scp
scp ./localfile user@123.45.67.89:~/remotefile
```

For a large and regular transfer, rsync might be a better choice:
```bash
# rsync
rsync -a ./localfile user@123.45.67.89:~/remotefile
```

Above commands also work with folders.

## Using as a browser SOCKS proxy

This allows you to safely browse in unsafe network.

```bash
# Dynamic port forwarding
ssh -D3000 user@remotehost
```

When setting up the proxy in browser, remote to check the remote DNS
box.


## Local port forwarding

Local port forwarding is useful when you are trying to access some service behind a firewall.  Suppose there is a database at 123.44.55.66:3306 behind the firewallhost.

```bash
# Local port forwarding
ssh -L 8000:123.44.55.66:3306 firewallhost
```

Running the above command would allow the remote database to be
accessed at the localhost:8000 port. 

Using the same technique, you can easily create tunnels to access
remote desktops in windows. 



## Remote port forwarding

Suppose there is a database at 123.44.55.66:3306 behind the firewallhost.
An alternative way is to forward the 3306 port to a server(say,
sharedhost) with public ip.  Run the following command on any machine
with access to 123.44.55.66.

```bash
# Reverse port forwarding
ssh -R 8000:123.44.55.66:3306 sharedhost
```

Then, you can access the same service via port 8000 on the shared host.

Simply combining the above three different type of port forwarding
would allow for many use cases and access to services behind firewall
securely.

## Config file for SSH client

Under .ssh/config in the home folder, you can always select the number 

```yaml
Host databasetunnel
    HostName firewallhost
    User myname
    IdentityFile ~/.ssh/mykey
    LocalForward 8000 123.44.55.66:3306
```

The database tunnel can then be established by 

```bash
ssh databasetunnel
```


## Multihop ssh with config file

Another common scenario would be to connect to a firewall first and
then ssh to the remote host.  This can be done transparently with
`ProxyCommand`.

```yaml
Host <visible hostname alias>
        Controlmaster auto
        User <user>
        hostname <visible hostname>
        port <port>
        IdentityFile ~/.ssh/<id file>

Host <private LAN hostname alias>
     ProxyCommand ssh -q -W <private LAN hostname>:<private LAN port> <visible hostname alias>
```
     
See: <http://askubuntu.com/questions/311447/how-do-i-ssh-to-machine-a-via-b-in-one-command>
