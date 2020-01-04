#!/usr/bin/env node

var stylq = require('stylq');
var iPrint = require('iPrint').iPrinter;


const [,,...args] = process.argv;

if(args.length<=2 && args.length>=1){
  if(args.length === 1){
    stylq.process(args[0]);
  }else{
    stylq.processAndSend(args[0],args[1]);
  }
}else{
  iPrint("Please the match the arguments passed","yellow");
}
