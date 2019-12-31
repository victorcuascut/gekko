#! /bin/bash

set -e 

FILEID=$1
TEMP_FILE=/tmp/backup.zip
HISTORY_PATH=./history

if [ -z $FILEID ]; then
    echo "No File ID listed"
else
    if [[ "$OSTYPE" == "darwin"* ]]; then
        if ! [ -x "$(command -v gsed)" ]; then
            echo 'Error: gsed is not installed.' >&2
            echo 'Install: brew install gsed.' >&2
            exit 1
        fi
        wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt \
        --keep-session-cookies --no-check-certificate https://docs.google.com/uc\?export=download\&id=${FILEID} \
        -O- | gsed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=${FILEID}" -O ${TEMP_FILE} && rm -rf /tmp/cookies.txt 
    else
        wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt \
        --keep-session-cookies --no-check-certificate https://docs.google.com/uc\?export=download\&id=${FILEID} \
        -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=${FILEID}" -O ${TEMP_FILE} && rm -rf /tmp/cookies.txt 
    fi
    if [ $? == 0 ]; then
        unzip -o ${TEMP_FILE} -d ${HISTORY_PATH}
        rm -f ${TEMP_FILE}
        echo "Download Successful"
    else
        echo "Unable to download file"
        exit 1
    fi
fi