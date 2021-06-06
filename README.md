# dtinvite
Disabled Techies invite request system

To get up and running:
#. Set base URI in dtinvite.yaml.
#. Set up the DB schema: rake db:migrate
#. Fill in the base DB data: sqlite3 -init dbinit.sql dtinvite.sqlite3 .quit
#. Download a current copy of Bootstrap CSS into
public/assets/css/bootstrap.min.css.
#. Run the app!
