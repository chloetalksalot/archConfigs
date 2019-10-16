#! /bin/bash
WALLPAPERS=".backgrounds/"
ALIST=( `ls -w1 $WALLPAPERS` )
RANGE=${#ALIST[@]}
let "number = $RANDOM % $RANGE"
nitrogen --set-scaled --save $WALLPAPERS/${ALIST[$number]}
