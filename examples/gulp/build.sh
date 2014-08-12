#! /bin/bash

cd demo1 
pwd
gulp

cd ../demo2
pwd
gulp compress

cd ../demo3
rm -rf /dist if -d dist
gulp

cd ../demo4
rm -rf dist if -d dist
gulp