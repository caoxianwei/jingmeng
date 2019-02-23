#!/usr/bin/env bash

PROJECT=goldOne
TAR_FILE=${PROJECT}-web.tar.gz
TARGET_FILE=dist

REMOTE_USER=ubuntu
REMOTE_SSH_KEY=~/.ssh/id_rsa
REMOTE_DIR=/opt/dwc

echo "$1"

uploadToServer() {
    echo "Start deploy Web Project to ${REMOTE_HOST}...."
    tar czf ${TAR_FILE} ${TARGET_FILE}
    echo "Start copy tar file to Server: ${REMOTE_HOST}...."
    ssh -i ${REMOTE_SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} -p ${REMOTE_PORT} "sudo mkdir -p ${REMOTE_DIR}"
    ssh -i ${REMOTE_SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} -p ${REMOTE_PORT} "sudo chown ${REMOTE_USER}:${REMOTE_USER} -R ${REMOTE_DIR}"
    scp -P ${REMOTE_PORT} -i ${REMOTE_SSH_KEY} ${TAR_FILE} ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/

    ssh -i ${REMOTE_SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} -p ${REMOTE_PORT} "cd ${REMOTE_DIR} && tar xzf ${TAR_FILE}"
    ssh -i ${REMOTE_SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} -p ${REMOTE_PORT} "cd ${REMOTE_DIR} && cp -rf dist/* ./"
    ssh -i ${REMOTE_SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} -p ${REMOTE_PORT} "cd ${REMOTE_DIR} && rm -rf dist/ && rm ${TAR_FILE}"
    ssh -i ${REMOTE_SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} -p ${REMOTE_PORT} "cd ${REMOTE_DIR} && find ./ -type f -mtime +1 -execdir rm -- {} \;"
}

if [ "$1" == "production" ];then
    REMOTE_HOST=103.230.243.173
    REMOTE_PORT=22
#    REMOTE_DIR=/opt/deploy-static/jingmeng/enabled/jingmeng
    REMOTE_DIR=/opt/deploy-static/jingmeng/enabled/jingmeng-site
    uploadToServer
elif [ "$1" == "dev" ];then
    REMOTE_HOST=13.250.165.76
    REMOTE_PORT=22
    uploadToServer

else
    echo "env not specified"
    exit
fi



echo "Finish deploying project...."



