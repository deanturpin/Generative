#!/bin/bash

# Initialise array
raster=()
for i in {1..87}; do

	raster+=' '
done

echo size of array ${#raster}

# Start node
raster[40]='#'

# Print array
for (( i = 0; i < 40; ++i )); do

	echo ${raster[@]}

	sleep 0.01
done

echo "C'est fini"
