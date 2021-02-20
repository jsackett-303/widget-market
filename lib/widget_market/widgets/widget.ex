defmodule WidgetMarket.Widgets.Widget do
  @moduledoc false

  use Ecto.Schema
  import Ecto.Changeset

  alias WidgetMarket.Users.User, as: Seller

  schema "widgets" do
    field :description, :string
    field :name, :string
    field :price, :decimal
    belongs_to :user, Seller

    timestamps()
  end

  @doc false
  def changeset(widget, attrs) do
    widget
    |> cast(attrs, [:name, :description, :price, :user_id])
    |> validate_required([:name, :description, :price, :user_id])
  end
end
