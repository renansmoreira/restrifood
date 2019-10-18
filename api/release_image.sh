heroku container:push web -a restrifood \
    && heroku container:release web -a restrifood \
    && ./heroku_logs.sh