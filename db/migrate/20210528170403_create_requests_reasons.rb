# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :requests_reasons do
      primary_key :id
      column :request_id, Integer, null: false
      column :reason_id, Integer, null:false
      column :extrainfo, String
    end
  end
end
