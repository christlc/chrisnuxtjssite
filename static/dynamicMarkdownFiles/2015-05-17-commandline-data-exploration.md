---
title: Shell command useful for data exploration
excerpt: "Introduce head/tail, more, grep, cut, wc, sort, uniq for basic data exploration."
tags: [command line, data exploration, encoding]
comments: true
date: 2015-05-17T20:32:38+08:00
---

Shell command is very useful for initial exploratory analysis of data files. 
A simple `head` would allow explore the content of a huge file and It is much faster than firing up an editor.  With so many different tools around for data analysis, I believed that command prompt one-liner could be one of the most understated tools.


## Looking at the first/last lines of a file

`Head / tail` views the first / last lines of a file.
```bash
# Print the first 10 lines 
head -n10 test.csv
# Print the last 10 lines
tail -n10 test.csv
```

`More / less` allows one's to inspect a file quickly.  It is much quicker than firing up a text editor.
```bash
# More allows scrolling forward only.
more test.csv
# Less allows scrolling in either directions and has a lot more features. 
less test.csv
```

A combination of these tools can be quite powerful in navigating large files.

```bash
# Explore the last 1000 lines of test.csv interactively.
tail -n1000 test.csv | less
```

## Watch the latest lines in a log file
Very often we would like to look at a log file while another program is continously outputting messages to it. 

```bash
tail -f everIncreasing.log
```

By adding the `-f` flag, tail will keep monitoring the file and show you the latest changes.  



## Basic data munging

### Grep unique id's
`Grep` searches for a certain regular expression pattern and prints the line(s) matching the expression. 
For example, searching for Chris within a text file would be:
```bash
grep Apple input.csv
```

One can then easily pipe the output to `wc` to count the number of matching lines.
```bash
grep Apple input.csv | wc -l
```

### Obtain the unique entries of a column

To obtain the unique entires in a column of a csv file, first we would like to obtain the column by `cut`.  Then, `sort` its output and count the unique entries with `uniq`.
```bash
<input.csv cut -d, -f1 | sort | uniq -c
```


## CSV files cleansing

I have once handled a csv file that has an extra comma at the end of every line.  
Because of this extra comma, it could not be read by pandas/R. 
This seems a be a task prefectly handled by `sed`.
```bash
sed s/,$// wrongcomma.csv > cleanFile.csv
```


However, the regular expression fails to match any of the expected string. 
It turns out that the line ending must be unix for `grep` to work. 
It can be easily converted by the command dos2unix. 
```bash
<wrongcomma.csv dos2unix | sed s/,$// wrongcomma.csv > cleanFile.csv
```

## Encoding

Another common problem with non English file is encoding. 
I have handled a lot of data with simplified Chinese character.  
```bash
# Convert from gb2312 to utf8 encoding
iconv -f gb2312 -t utf8 myfile.csv > correct.csv
```



## Further reading
Greg Reda shared his experience with unix commands for data science. 
<http://www.gregreda.com/2013/07/15/unix-commands-for-data-science/>

Jeroen introduced a few more tools for data science in the following post. 
I personally find that [jq](http://stedolan.github.io/jq/) and [csvkit](https://csvkit.readthedocs.org/en/0.9.1/) introduced in the post are very useful tools introduced in this article very useful for command line data exploration.  Also check out his book "Data Science at the Command Line".
<http://jeroenjanssens.com/2013/09/19/seven-command-line-tools-for-data-science.html>

