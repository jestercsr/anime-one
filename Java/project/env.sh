export TIDB_HOST='gateway01.eu-central-1.prod.aws.tidbcloud.com'
export TIDB_PORT='4000'
export TIDB_USER='iYA8cEhKq4NHPtP.root'
export TIDB_PASSWORD='tmsjB84C61KFUhFm'
export TIDB_DB_NAME='test'
export USE_SSL='true'

jdbc_url="jdbc:mysql://${TIDB_USER}:${TIDB_PASSWORD}${TIDB_HOST}:${TIDB_PORT}/${TIDB_DB_NAME}"
if [ 'true' == "${USE_SSL}" ]; then
  jdbc_url="${jdbc_url}?sslMode=VERIFY_IDENTITY&enabledTLSProtocols=TLSv1.2,TLSv1.3"
fi

export TIDB_JDBC_URL=${jdbc_url}