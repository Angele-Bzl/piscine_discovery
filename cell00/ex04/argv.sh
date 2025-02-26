#!/bin/bash
if [ $# -eq 0 ]
then
	echo "No arguments supplied"
else
	#for ((i=0 ; i <=3 && i <=$# ; i++))
	#	echo {$i}
	$count = 0;
	for arg in $@
	do
		if ($count -eq 3)
		then
			break
		fi
		echo "$arg"
		$count = $((count + 1))
	done
fi
