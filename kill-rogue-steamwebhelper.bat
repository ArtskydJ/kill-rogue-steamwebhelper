@echo off
typeperf "\Process(steamwebhelper)\%% Processor Time" -sc 5 > typeperf_run.txt
node is-high-cpu.js && pskill steamwebhelper
