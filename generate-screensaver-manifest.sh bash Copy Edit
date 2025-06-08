#!/bin/bash

# Set your image directory
IMAGE_DIR="./assets/screensaver"
OUTPUT_FILE="$IMAGE_DIR/images.json"

# Go to the image directory
cd "$IMAGE_DIR" || exit 1

# Create the JSON file with image file names
ls -1 *.jpg *.jpeg *.png *.gif 2>/dev/null | jq -R . | jq -s . > "$OUTPUT_FILE"

echo "Generated $OUTPUT_FILE with the following files:"
cat "$OUTPUT_FILE"


*chmod +x generate-screensaver-manifest.sh
#./generate-screensaver-manifest.sh
