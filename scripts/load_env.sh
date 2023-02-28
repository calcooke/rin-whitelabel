#!/bin/bash

# To create a new brand:

# Create a new folder in brands with the APP_BRAND name
# Copy a native assets folder into it from another brand
# Add new APP_BRAND, BUNDLE_ID, and DISPLAY_NAME properties below.
# Comment previously selected brand, uncomment new brand
# run configure-brand
# run yarn start —reset-cache (this resets all the styles from the previous loaded app)

#Default brand
#export 'APP_BRAND'='default' 'BUNDLE_ID'='com.defaultwhitelabel.app' 'DISPLAY_NAME'='Default App'

# Brand one
export 'APP_BRAND'='brand_one' 'BUNDLE_ID'='com.brandone.app' 'DISPLAY_NAME'='Brand One'

# Brand two
#export 'APP_BRAND'='brand_two' 'BUNDLE_ID'='com.brandtwo.app' 'DISPLAY_NAME'='Brand Two'

# Brand three
#export 'APP_BRAND'='brand_three' 'BUNDLE_ID'='com.brandthree.app' 'DISPLAY_NAME'='Brand Three'


varMissingMessage="variable not present! Ensure it exists in EnvKey for the selected brand/sub-environment."
[ -z "$APP_BRAND" ] && echo "ERROR: APP_BRAND $varMissingMessage" && return 1
[ -z "$BUNDLE_ID" ] && echo "ERROR: BUNDLE_ID $varMissingMessage" && return 1

echo "Loaded variables for brand: $APP_BRAND"