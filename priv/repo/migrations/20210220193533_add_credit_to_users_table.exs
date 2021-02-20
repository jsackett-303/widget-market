defmodule WidgetMarket.Repo.Migrations.AddCreditToUsersTable do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :credit, :decimal, null: false, default: 0.0
    end
  end
end
