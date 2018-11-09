---
title: Working with compressed files in command line
excerpt: "Gzip, tar for compressing files and show how to piping to other commands."
tags: [command line, gzip, tar, data exploration]
comments: true
date: 2015-05-17T20:32:38+08:00
---


Since data stored in plain text format like CSV often occupies huge amount space, the data is often is compressed for transmission and storage. 

Because there are often many parameters associated with these commands, I find myself searching the same topic over and over again.  Hopefully, this page would be useful for you too. 

## Compress and Decompress a single file (gzip)


```bash
# Compress the file 
gzip testfile.csv
# Gives a testfile.csv.gz

# View the content directly without decompressing
less archive.tar.gz

# Decompress a file 
gzip -d testfile.csv.gz

```

Less can look within the content of a gzipped file, making it very useful for exploring huge file. 
{: .notice}

## Handling "Big" text file with pipes
Very often, I obtain a database dump with size in terms of multiple gigabytes.  Reading the entire file into memroy is not feasible and dumping the data into a database takes some time.

Decompressing to standard output allows us to pipe the output to another command for further processing.   For example, the following command counts the number of lines in the compressed file. 
```bash
gzip -dc testfile.csv.gz | wc -l
```

Create a sample data of the first 10000 lines of the data. 
```bash
gzip -dc testfile.csv.gz | head -n10000 > output.csv
```

`zcat` can also print the content to standard output.
{: .notice}


## Compress and Decompress an archive 
To uncompress a zip file, 
```bash
# extract
tar -zxvf archive.tar.gz
# list the files
tar -ztvf archive.tar.gz
# This will also list the file.
less archive.tar.gz
```

To compress a directory or a list of files, 
```bash
# zip the files
tar -zcvf
```

