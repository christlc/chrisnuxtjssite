---
title: Linux Disk Setup Procedure
tags: [linux, disk installation]
comments: true
date: 2017-04-30T20:32:38+08:00
---

This serves as a little note for myself when installing a new disk to
a linux machine. 

## Setup auto mount at boot

To auto-mount at boot, edit the entries in /etc/fstab.

```bash
UUID=5dde4c32-35ca-4a4b-8a45-44a3da0a375e   /mnt/newred3t
ext4    defaults    0       2
```

For SSD, it might be worth doing: noatime,nodiratime,discard,defaults.

ZFS will manage the mounting, and there's no need to play with this setting.

## Smartd monitoring SMART statistics of disks

Edit /etc/smartd.conf

``` bash 
/dev/sda -a -o on -S on -s (S/../.././02|L/../../6/03) -m
email@example.com -M exec /usr/share/smartmontools/smartd-runner
```

Open /etc/default/smartmontools. Uncomment the line start_smartd=yes.



