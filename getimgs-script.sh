#!/bin/bash

# Define the directory path
FEEDBACK_IMG_DIR="./public/images/feedbacks"
SLIDER_PATH="./src/components/Slider/feedbackImgPathLIst.ts"

# Get a list of image file names in the directory and format them as an array
FEEDBACK_FILE_NAME_ARR=($(ls "$FEEDBACK_IMG_DIR"))

# Create a JavaScript-like assignment statement
jsAssignment="export const feedbackPathList = ["
for fileName in "${FEEDBACK_FILE_NAME_ARR[@]}"; do
  jsAssignment+="\"$fileName\", "
done
jsAssignment=${jsAssignment%, } # Remove the trailing comma and space
jsAssignment+="];"

# Write the assignment statement to a JavaScript file
echo "$jsAssignment" > "$SLIDER_PATH"
