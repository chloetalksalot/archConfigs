#!/bin/bash
while [ "$select" != "no" -a "$select" != "yes" ]; do
	select=$(echo -e 'no\nyes' | dmenu -nb '#151515' -nf '#999999' -sb '#5294e2' -sf '#000000' -fn '-*-*-medium-r-normal-*-*-*-*-*-*-100-*-*' -i -p "exit i3?")
	[ -z "$select" ] && exit 0
done
[ "$select" = "no" ] && exit 0
i3-msg exit
