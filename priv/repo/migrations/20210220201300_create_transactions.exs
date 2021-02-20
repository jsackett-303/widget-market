defmodule WidgetMarket.Repo.Migrations.CreateTransactions do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :buyer_id, references(:users)
      add :seller_id, references(:users)
      add :widget_id, references(:widgets)

      timestamps()
    end

    create index(:transactions, [:buyer_id])
    create index(:transactions, [:seller_id])
    create index(:transactions, [:widget_id])
  end
end
