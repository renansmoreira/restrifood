DATABASE_URL=$DATABASE_URL \
    && ENV_NAME=$ENV_NAME \
    && [ -z "$SSH_CLIENT" ] && source <(curl --fail --retry 3 -sSL "$HEROKU_EXEC_URL")