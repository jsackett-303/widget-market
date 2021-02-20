defmodule WidgetMarket.Transactions.Transaction do
  @moduledoc false

  use Ecto.Schema
  import Ecto.Changeset

  alias WidgetMarket.Users.User
  alias WidgetMarket.Widgets.Widget

  @required_fields [:buyer_id, :seller_id, :widget_id]

  schema "transactions" do
    belongs_to :buyer, User
    belongs_to :seller, User
    belongs_to :widget, Widget

    timestamps()
  end

  @doc false
  def changeset(transaction, attrs) do
    transaction
    |> cast(attrs, @required_fields)
    |> validate_required(@required_fields)
  end
end
