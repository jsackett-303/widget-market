defmodule WidgetMarket.Repo.Migrations.CreateWidgets do
  use Ecto.Migration

  def change do
    create table(:widgets) do
      add :name, :string
      add :description, :string
      add :price, :decimal
      add :user_id, references(:users)

      timestamps()
    end

    create index(:widgets, [:user_id])
  end
end
