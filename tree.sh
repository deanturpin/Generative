#!/bin/bash

# Initialise array
declare -a raster
for i in {0..39}; do

	raster[i]='.'
done

# Start node
raster[10]='#'

# Print array
for (( i = 0; i < 40; ++i )); do

	# if (( !(i %3) )); then

		# Find each node and split it
		# for (( j = 0; j < 40; ++j )); do

			# if [[ ${raster[j]} ~= '#' ]]; then

				# Split current
				# raster[j]='.'
				# raster[j-1]='#'
				# raster[j+1]='#'

				# raster[j]='-'
				# continue
			# fi
		# done
	# fi

	echo ${raster[*]}

	sleep 0.01
done

echo "C'est fini"
