# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :users do
      primary_key :id
      column :username, String, null: false
      column :pwhash, String, null: false
    end
  end
end
