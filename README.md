# dtinvite
Disabled Techies invite request system

To get up and running:
1. Set base URI in dtinvite.yaml.
1. Set up the DB schema: `rake db:migrate`
1. Fill in the base DB data: `sqlite3 -init dbinit.sql dtinvite.sqlite3 .quit`
1. Download a current copy of Bootstrap CSS into
public/assets/css/bootstrap.min.css.
1. Run the app!
