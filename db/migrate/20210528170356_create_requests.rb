# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :requests do
      primary_key :id
      column :name, String, null: false
      column :email, String, null: false
      column :referer, String
      column :notes, String
      column :submitted_at, DateTime
      column :processed, TrueClass
      column :processed_by, String
      column :processed_at, DateTime
      column :processed_result, String
      column :processed_notes, String
    end
  end
end
