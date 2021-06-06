# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :reasons do
      primary_key :id
      column :shortdesc, String, null: false
      column :fulldesc, String, null: false
      column :extradesc, String
    end
  end
end
