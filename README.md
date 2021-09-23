# Poki Habit Tracker

Sign up and select your starter pokemon! Keep your pokemon satisfied and alive by tracking your daily habits and creating to do lists. Each time you tick off a daily habit or an item on your to do list, you earn health and experience for your pokemon. If you miss your daily habits, your pokemon will lose health.

### Installation Instructions

Clone the following repos and follow instructions:

- Backend: [poki_habit_tracker_api](https://github.com/jazminmatos/poki_habit_tracker_api)
  - Run bundle install
  - Start the PG database server: /usr/local/opt/postgresql/bin/pg_ctl -D /usr/local/var/postgres -l logfile start
  - Run rails db:create
  - Run rails db:migrate
  - Run rails s to start the Rails server
  - PostgreSQL troubleshooting:
    - Stop the PG database server: pg_ctl stop -D /usr/local/var/postgres -m fast
    - See all the servers that are running: ps -ef | grep postgres
    - Kill servers: brew services stop postgres
- Frontend: [poki_habit_tracker_client](https://github.com/jazminmatos/drawing_client)
  - Run npm install
  - Run npm start

### Contributer's Guide

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License

This is available as open source under the terms of the [MIT License](https://choosealicense.com/licenses/mit/).
