require 'sqlite3'
require 'rom'
require 'rom/sql/rake_task'

namespace :db do
  task :setup do
    ROM::SQL::RakeSupport.env = ROM.container(:sql, "sqlite://#{Dir.pwd}/dtinvite.sqlite3")
  end
  task :fill do
    system("sqlite3 dtinvite.sqlite3 -init dbinit.sql .quit")
  end
end

